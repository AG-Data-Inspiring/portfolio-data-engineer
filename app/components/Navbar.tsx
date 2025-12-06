'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-gray-800 bg-black sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition">
        Angela Guo
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-8 items-center">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        <Link href="/live-tool" className="hover:text-gray-400 transition">Live Data Tool</Link>
        <Link href="/projects" className="hover:text-gray-400 transition">Projects</Link>
        <Link href="/story" className="hover:text-gray-400 transition">Story</Link>
      </div>

      {/* Desktop CTA */}
      <div className="hidden sm:flex items-center gap-10">
        <a
          href="https://www.linkedin.com/in/angelaguo813/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition"
          aria-label="LinkedIn"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          href="mailto:angelag921@gmail.com"
          className="text-white hover:text-gray-300 transition"
          aria-label="Contact"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

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
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:angelag921@gmail.com"
              className="text-white hover:text-gray-300 transition"
              aria-label="Contact"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
