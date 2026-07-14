import Image from 'next/image';

export default function Home() {
  return (
    <section data-testid="hero-section" className="flex min-h-screen flex-col overflow-hidden bg-[#20409A] text-white">
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
              <div className="flex px-8 py-8 sm:px-16 sm:py-10 lg:py-12">
                <h2 className="text-2xl font-semibold lg:text-3xl">Strategy</h2>
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
            <div className="flex h-full w-full min-w-0 items-start justify-start overflow-hidden">
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
