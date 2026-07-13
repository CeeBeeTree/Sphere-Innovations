'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function CursorLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate vector from center to cursor
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Normalize and scale for rotation angles
      const maxDistance = Math.sqrt(rect.width ** 2 + rect.height ** 2) / 2;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);
      const normalizedDx = Math.max(-1, Math.min(1, dx / maxDistance));
      const normalizedDy = Math.max(-1, Math.min(1, dy / maxDistance));

      // Map to rotation angles
      const rotateYAngle = normalizedDx * 12; // ±12°
      const rotateXAngle = -normalizedDy * 8; // ∓8°

      setRotation({
        rotateX: rotateXAngle,
        rotateY: rotateYAngle,
      });
    };

    const handleMouseLeave = () => {
      setRotation({ rotateX: 0, rotateY: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center perspective"
      style={{ perspective: '800px' }}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
        }}
      >
        <Image
          ref={imageRef}
          src="/sphere-logo.png"
          alt="Sphere Innovations"
          width={300}
          height={300}
          className="w-auto h-auto"
          priority
        />
      </div>
    </div>
  );
}
