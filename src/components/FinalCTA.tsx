"use client";

export default function FinalCTA() {
  return (
    <section id="download" className="relative py-24 md:py-32 px-6 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 m-auto animate-float-1"
          style={{
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse, rgba(48,209,88,0.18) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-0 left-0 animate-float-2"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(74,222,128,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 animate-float-3"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#30D158]/30 to-transparent mb-24" />

        <div className="relative rounded-3xl border border-[#30D158]/20 bg-gradient-to-b from-[#30D158]/10 via-white/[0.03] to-white/[0.01] p-12 md:p-16 text-center overflow-hidden">

          <div className="absolute inset-0 islamic-pattern opacity-30 rounded-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#30D158]/50 to-transparent" />

          {/* Corner ornaments */}
          <div className="absolute top-6 left-6 opacity-40">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L19.8 11.2L30 12.5L22.5 19.6L24.5 30L16 25L7.5 30L9.5 19.6L2 12.5L12.2 11.2L16 2Z" stroke="rgba(48,209,88,0.5)" strokeWidth="0.8" fill="none"/>
            </svg>
          </div>
          <div className="absolute top-6 right-6 opacity-40">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L19.8 11.2L30 12.5L22.5 19.6L24.5 30L16 25L7.5 30L9.5 19.6L2 12.5L12.2 11.2L16 2Z" stroke="rgba(48,209,88,0.5)" strokeWidth="0.8" fill="none"/>
            </svg>
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#30D158]/30 bg-[#30D158]/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#30D158] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#30D158] uppercase">Доступно на iOS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              <span className="gradient-text">Никогда не пропускайте</span>
              <br />
              <span className="gradient-text-accent">молитву</span>
            </h2>

            <p className="text-[#8A8F98] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Присоединяйтесь к тысячам мусульман, которые используют Sujud, чтобы находить
              места для молитвы везде, куда их ведёт жизнь.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#30D158] hover:bg-[#34D862] text-white font-semibold text-lg transition-all duration-200 shadow-[0_0_0_1px_rgba(48,209,88,0.5),0_4px_24px_rgba(48,209,88,0.5),0_0_80px_rgba(48,209,88,0.1),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_1px_rgba(104,114,217,0.6),0_8px_40px_rgba(48,209,88,0.6),0_0_100px_rgba(48,209,88,0.15),inset_0_1px_0_0_rgba(255,255,255,0.25)] active:scale-[0.98] overflow-hidden"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Скачать в App Store</span>
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#8A8F98]">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(48,209,88,0.7)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Приватность прежде всего
                </span>
                <span className="text-white/10">·</span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(48,209,88,0.7)" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  Рейтинг 4.8 в App Store
                </span>
                <span className="text-white/10">·</span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(48,209,88,0.7)" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                  15 000+ мечетей
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
