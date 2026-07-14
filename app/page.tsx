'use client';

import Image from 'next/image';
import { useRef, useState, type MouseEvent } from 'react';

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = logoRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -18,
      y: x * 18,
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      data-testid="hero-section"
      className="flex min-h-screen flex-col overflow-hidden bg-[#20409A] text-white"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{ perspective: '1000px' }}
    >
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-4 sm:px-16 sm:py-5">
        <div className="flex-shrink-0">
          <Image
            src="/logo-words.png"
            alt="Sphere Innovations"
            width={200}
            height={50}
            className="h-10 sm:h-12 w-auto select-none"
            priority
          />
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#about" className="font-medium text-white/90 hover:text-white transition-colors duration-200">About Us</a>
          <a href="#news" className="font-medium text-white/90 hover:text-white transition-colors duration-200">Latest News</a>
          <a href="#contact" className="font-medium text-white/90 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* Main Content Grid */}
      <main className="flex flex-1 flex-col">
        <div className="grid flex-1 grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <div className="grid min-h-0 grid-rows-[2fr_1fr] border-t border-white/20 md:border-r md:border-white/20">
            <div className="flex items-center border-b border-white/20 px-8 py-8 sm:px-16 sm:py-10 lg:py-12">
              <h1 className="max-w-[18ch] text-3xl font-bold leading-none md:text-4xl lg:text-5xl xl:text-6xl">
                Your trusted technology advisor for Small Businesses and Start-ups
              </h1>
            </div>
            <div className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              <div
                tabIndex={0}
                className="group relative flex flex-col gap-3 px-8 py-8 pr-4 outline-none sm:px-16 sm:py-10 lg:py-12"
              >
                <h2 className="text-2xl font-semibold lg:text-3xl">Strategy</h2>
                <div className="opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-within:opacity-100 sm:opacity-0">
                  <p className="mb-4 max-w-[34ch] text-sm leading-relaxed text-white/80">
                    We cut through the noise to build a clear, actionable technology roadmap aligned to your goals — so every investment moves your business forward.
                  </p>
                  <a
                    className="group/btn inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#20409A] transition-colors hover:bg-white/90"
                    href="/book"
                    data-discover="true"
                  >
                    Book a discussion
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex px-8 py-8 sm:px-16 sm:py-10 lg:py-12">
                <h2 className="text-2xl font-semibold lg:text-3xl">Education</h2>
              </div>
              <div className="flex px-8 py-8 sm:px-16 sm:py-10 lg:py-12">
                <h2 className="text-2xl font-semibold lg:text-3xl">Operations</h2>
              </div>
            </div>
          </div>

          <div className="flex h-full min-w-0 items-stretch justify-start md:justify-end">
            <div ref={logoRef} className="flex h-full w-full min-w-0 items-start justify-start overflow-hidden">
              <div
                className="h-full w-full transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformOrigin: 'center center',
                }}
              >
                <Image
                  src="/sphere-logo.png"
                  alt="Sphere logo"
                  width={500}
                  height={500}
                  className="h-full w-auto max-w-none object-contain object-left"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-8 py-5 text-sm text-white/60 sm:px-16" >
        © 2026 Sphere Innovations.{' '}
        <a href="https://emergent.sh" target="_blank" className="underline transition-colors hover:text-white/90">
          Vibe coded with Emergent
        </a>
      </footer>
    </section>
  );
}
