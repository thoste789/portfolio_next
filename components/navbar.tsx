"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f9f9f9] border-b border-[#e0e0e0]">
        <div className="flex items-center justify-between px-6 md:px-20 py-4">
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-[0.2em] text-[#1a1c1c] hover:opacity-70 transition-opacity"
          >
            TIM_HOSTE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[#1a1c1c] hover:opacity-50 transition-opacity tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#1a1c1c] text-white text-[13px] font-bold px-8 py-4 hover:bg-[#333333] transition-colors tracking-[0.1em]"
            >
              LET&apos;S TALK
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 group"
          >
            <span className="block w-6 h-px bg-[#1a1c1c] transition-all duration-300 group-hover:w-5" />
            <span className="block w-4 h-px bg-[#1a1c1c] transition-all duration-300 group-hover:w-6" />
            <span className="block w-6 h-px bg-[#1a1c1c] transition-all duration-300 group-hover:w-4" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-75 bg-[#1a1c1c] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#2a2c2c]">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#666666]">
            MENU
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="relative w-8 h-8 flex items-center justify-center group"
          >
            <span className="absolute block w-5 h-px bg-white rotate-45 transition-transform duration-200 group-hover:rotate-[135deg]" />
            <span className="absolute block w-5 h-px bg-white -rotate-45 transition-transform duration-200 group-hover:rotate-[45deg]" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-0 px-8 pt-10 flex-1">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[32px] font-extralight text-white leading-none py-4 border-b border-[#2a2c2c] hover:text-[#ff5722] transition-colors duration-200"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="px-8 pb-12">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-white text-[#1a1c1c] text-[13px] font-bold py-4 hover:bg-[#f9f9f9] transition-colors tracking-[0.1em]"
          >
            LET&apos;S TALK ↗
          </Link>
        </div>
      </div>
    </>
  );
}
