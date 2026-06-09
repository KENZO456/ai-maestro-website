import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function usePageBoot() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Init reveal animations
    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
          delay: (i % 4) * 0.05,
        }
      );
    });

    // Tilt effect
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.style.transformStyle = 'preserve-3d';
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(1200px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateY(-4px)`;
      };
      const onLeave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });

    setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}
