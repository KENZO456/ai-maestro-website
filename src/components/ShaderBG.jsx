import { useEffect, useRef } from 'react';
import { mountCyberShader } from '../lib/cyberGridShader';

export function ShaderBG({ intensity = 1, opacity = 1 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const dispose = mountCyberShader(ref.current, { intensity });
    return dispose;
  }, [intensity]);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity, overflow: 'hidden' }}
    />
  );
}
