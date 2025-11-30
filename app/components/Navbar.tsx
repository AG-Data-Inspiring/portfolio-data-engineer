'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-gray-800 bg-black sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition">
        A
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-8 items-center">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        <Link href="/live-tool" className="hover:text-gray-400 transition">Live Data Tool</Link>
        <Link href="/projects" className="hover:text-gray-400 transition">Projects</Link>
        <Link href="/story" className="hover:text-gray-400 transition">Story</Link>
      </div>

      {/* Desktop CTA */}
      <a 
        href="mailto:contact@angela.dev" 
        className="hidden sm:block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
      >
        Contact
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="sm:hidden flex flex-col gap-1"
      >
        <div className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black border-b border-gray-800 p-6 flex flex-col gap-4 sm:hidden">
          <Link href="/" className="hover:text-gray-400 transition" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/live-tool" className="hover:text-gray-400 transition" onClick={() => setMobileOpen(false)}>Live Data Tool</Link>
          <Link href="/projects" className="hover:text-gray-400 transition" onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/story" className="hover:text-gray-400 transition" onClick={() => setMobileOpen(false)}>Story</Link>
          <a href="mailto:contact@angela.dev" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-center">Contact</a>
        </div>
      )}
    </nav>
  );
}
