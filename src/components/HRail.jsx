import { useEffect, useRef, useState } from 'react';

export function HRail({ children, ariaLabel = 'Horizontal scroll', label = 'Drag · scroll', minItem = 340, gap = 24, dark = false, itemAlign = 'stretch', style = {} }) {
  const trackRef = useRef(null);
  const [prog, setProg] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScroll(max > 4);
      setProg(max > 0 ? el.scrollLeft / max : 0);
    };
    update();

    const onWheel = (e) => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= max - 1;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    let down = false, startX = 0, startLeft = 0, moved = 0;
    const onDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      down = true; moved = 0;
      startX = e.clientX; startLeft = el.scrollLeft;
      el.classList.add('is-grabbing');
    };
    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => { down = false; el.classList.remove('is-grabbing'); };
    const onClick = (e) => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } };

    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener('scroll', update, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClick, true);

    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', update);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, [children]);

  return (
    <div className={`hrail${dark ? ' hrail-dark' : ''}`} style={style}>
      <div
        ref={trackRef}
        className="hrail-track"
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        style={{ gap, '--hrail-min': `${minItem}px`, alignItems: itemAlign }}
      >
        {Array.isArray(children)
          ? children.map((child, i) => <div className="hrail-item" key={i}>{child}</div>)
          : <div className="hrail-item">{children}</div>
        }
      </div>
      <div className="hrail-foot" aria-hidden="true">
        <div className="hrail-hint mono">
          {canScroll ? <>{label} <span className="hrail-arrow">→</span></> : ''}
        </div>
        <div className="hrail-bar"><span style={{ transform: `scaleX(${Math.max(0.04, prog)})` }} /></div>
      </div>
    </div>
  );
}
