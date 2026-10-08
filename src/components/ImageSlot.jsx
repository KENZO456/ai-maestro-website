// Image slot. Renders nothing for visitors until a real `src` is supplied
// (no placeholder text ever reaches the live page). In dev, shows a dashed marker.
export function ImageSlot({ image, className, style, eager = false, decorative = false }) {
  if (!image) return null;
  const { src, avif, webp, alt, w, h } = image;
  const frame = { width: '100%', height: 'auto', aspectRatio: `${w} / ${h}`, display: 'block', objectFit: 'cover', ...style };
  if (!src) {
    if (!import.meta.env.DEV) return null;
    return <div aria-hidden="true" className={className} style={{ ...frame, border: '1.5px dashed currentColor', opacity: .35, borderRadius: 8 }} data-image-slot={alt} />;
  }
  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={decorative ? '' : alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} style={frame} />
    </picture>
  );
}
