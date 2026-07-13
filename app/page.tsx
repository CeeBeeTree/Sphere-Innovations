import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#20409A] text-white">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between pl-8 pr-5 sm:pl-16 sm:pr-12 py-5">
        <div className="flex-shrink-0">
          <Image
            src="/logo-words.png"
            alt="Sphere Innovations"
            width={200}
            height={50}
            className="object-contain select-none"
            priority
          />
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-sm font-medium hover:text-white/80 transition">About</a>
          <a href="#news" className="text-sm font-medium hover:text-white/80 transition">News</a>
          <a href="#contact" className="text-sm font-medium hover:text-white/80 transition">Contact</a>
        </div>
      </nav>

      {/* Main Content Grid */}

    </div>
  );
}
