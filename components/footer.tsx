import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1c1c] px-6 md:px-20 pt-20 pb-10 gap-8 ">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* CTA */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] text-[#999999] tracking-[0.3em] uppercase">
            READY TO COLLABORATE?
          </span>
          <h2 className="font-mono text-[68px] font-extralight text-white leading-[0.95]">
            Let&apos;s Build
            <br />
            Something
            <br />
            Great.
          </h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#1a1c1c] text-sm font-bold px-8 py-4 w-fit hover:bg-[#f9f9f9] transition-colors tracking-[0.1em]"
          >
            GET IN TOUCH ↗
          </Link>
        </div>

        {/* Links */}
        <div className="flex gap-20 mt-8 md:mt-2">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] text-[#999999] tracking-[0.3em] uppercase">
              NAVIGATION
            </span>
            <Link href="/work" className="text-sm text-white leading-[1.8] hover:text-[#999999] transition-colors">Work</Link>
            <Link href="/about" className="text-sm text-white leading-[1.8] hover:text-[#999999] transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-white leading-[1.8] hover:text-[#999999] transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] text-[#999999] tracking-[0.3em] uppercase">
              SOCIAL
            </span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white leading-[1.8] hover:text-[#999999] transition-colors">LinkedIn</a>
            <a href="https://read.cv" target="_blank" rel="noopener noreferrer" className="text-sm text-white leading-[1.8] hover:text-[#999999] transition-colors">Read.cv</a>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#333333] mb-8" />

      <div className="flex items-center justify-between">
        <span className="text-[10px] text-[#999999] tracking-[0.2em] uppercase">
          © 2026 TH DESIGN. ALL RIGHTS RESERVED.
        </span>
        <a
          href="#top"
          className="text-[10px] text-[#999999] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
