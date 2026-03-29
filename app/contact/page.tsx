import Footer from "@/components/footer";
import { PageTitle } from "@/components/page-title";

export default function Contact() {
  return (
    <main className="bg-[#f9f9f9] pt-20">
      {/* Page Header */}
      <section className="pt-20 px-20 py-20">
        <p className="text-[10px] text-[#666666] tracking-[0.3em] uppercase mb-6">
          CONTACT
        </p>
        <PageTitle title="Let's Work Together" />
        <p className="text-base text-[#666666] leading-relaxed max-w-[560px]">
          Have a project in mind? I&apos;d love to hear about it. Fill out the
          form below or reach out directly — I typically respond within 24
          hours.
        </p>
      </section>

      {/* Content */}
      <section className="px-20 pb-20 flex gap-20 items-start">
        {/* Info Panel */}
        <div className="flex flex-col gap-12 w-120 shrink-0">
          <p className="text-[10px] text-[#666666] tracking-[0.3em] uppercase font-bold">
            GET IN TOUCH
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-[#999999] tracking-[0.2em] uppercase font-bold">
              EMAIL
            </p>
            <a
              href="mailto:thoste789@gmail.com"
              className="text-lg font-medium text-[#1a1c1c] hover:text-[#b02f00] transition-colors"
            >
              thoste789@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-[#999999] tracking-[0.2em] uppercase font-bold">
              BASED IN
            </p>
            <p className="text-lg font-medium text-[#1a1c1c]">
              New Jersey, USA
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] text-[#999999] tracking-[0.2em] uppercase font-bold">
              SOCIAL
            </p>
            <a
              href="https://www.linkedin.com/in/timothy-hoste-069651104/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#b02f00] hover:opacity-70 transition-opacity"
            >
              LinkedIn ↗
            </a>
            <a
              href="/about"
              className="text-sm font-semibold text-[#b02f00] hover:opacity-70 transition-opacity"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="mailto:thoste789@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-6 flex-1"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[10px] text-[#666666] tracking-[0.2em] uppercase font-bold"
            >
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full h-13 px-4 bg-white border border-[#e0e0e0] text-[#1a1c1c] text-[15px] placeholder:text-[#bbbbbb] outline-none focus:border-[#1a1c1c] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[10px] text-[#666666] tracking-[0.2em] uppercase font-bold"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full h-13 px-4 bg-white border border-[#e0e0e0] text-[#1a1c1c] text-[15px] placeholder:text-[#bbbbbb] outline-none focus:border-[#1a1c1c] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[10px] text-[#666666] tracking-[0.2em] uppercase font-bold"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-4 bg-white border border-[#e0e0e0] text-[#1a1c1c] text-[15px] placeholder:text-[#bbbbbb] outline-none focus:border-[#1a1c1c] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1a1c1c] text-white text-[13px] font-bold px-8 py-4 w-fit hover:bg-[#333333] transition-colors tracking-[0.1em]"
          >
            SEND MESSAGE ↗
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
