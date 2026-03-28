"use client";

function IslamicStar({ size = 80, opacity = 0.15 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      <polygon
        points="50,5 61.8,38.2 95,38.2 68.1,58.5 79.4,91.8 50,72 20.6,91.8 31.9,58.5 5,38.2 38.2,38.2"
        stroke="rgba(48,209,88,0.6)"
        strokeWidth="0.8"
        fill="none"
      />
      <polygon
        points="50,20 58.7,44.4 84,44.4 63.6,59.1 71.2,83.5 50,69 28.8,83.5 36.4,59.1 16,44.4 41.3,44.4"
        stroke="rgba(48,209,88,0.3)"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="fade-up-element flex flex-col items-center gap-2 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-white/[0.1] hover:bg-white/[0.05] transition-all duration-300 group">
      <div className="w-10 h-10 rounded-xl bg-[#30D158]/15 border border-[#30D158]/20 flex items-center justify-center text-[#30D158] mb-1 group-hover:shadow-[0_0_16px_rgba(48,209,88,0.25)] transition-all duration-300">
        {icon}
      </div>
      <p className="text-2xl md:text-3xl font-semibold text-[#EDEDEF] tracking-tight">{value}</p>
      <p className="text-sm text-[#8A8F98] text-center">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(48,209,88,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
        <IslamicStar size={120} opacity={0.4} />
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none">
        <IslamicStar size={100} opacity={0.3} />
      </div>
      <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none hidden lg:block">
        <IslamicStar size={60} opacity={0.2} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="fade-up-element">
            <span className="inline-block text-xs font-mono tracking-widest text-[#30D158] uppercase mb-4 border border-[#30D158]/30 rounded-full px-3 py-1 bg-[#30D158]/10">
              О Sujud
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDEF] leading-tight mb-6">
              Молитвенный помощник,{" "}
              <span className="gradient-text-accent">созданный для уммы</span>
            </h2>

            <p className="text-[#8A8F98] text-lg leading-relaxed mb-6">
              Sujud — мобильное приложение, разработанное для того, чтобы мусульмане могли легко
              находить мечети и места для молитвы где угодно. Путешествуете ли вы или находитесь
              в родном городе — Sujud гарантирует, что вы не пропустите ни одной молитвы.
            </p>

            <p className="text-[#8A8F98] leading-relaxed mb-8">
              Создано при поддержке сообщества: платформа растёт каждый день, пока мусульмане
              по всему миру добавляют новые места, делая Sujud наиболее полным и актуальным
              каталогом мечетей.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: "Обновления от сообщества", desc: "Новые мечети добавляются пользователями ежедневно" },
                { label: "Приватность прежде всего", desc: "Ваше местоположение никогда не сохраняется" },
                { label: "Постоянное улучшение", desc: "Регулярные обновления с новыми функциями" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-[#30D158]/20 border border-[#30D158]/40 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#EDEDEF]">{item.label}</span>
                    <span className="text-sm text-[#8A8F98]"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              value="15 000+"
              label="Мечетей по всему миру"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              }
            />
            <StatCard
              value="100+"
              label="Охваченных стран"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              }
            />
            <StatCard
              value="4.8★"
              label="Рейтинг в App Store"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
            />
            <StatCard
              value="Ежедневно"
              label="Новые места добавляются"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              }
            />

            <div className="col-span-2 fade-up-element relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#30D158]/10 to-transparent p-6 overflow-hidden">
              <div className="absolute inset-0 islamic-pattern opacity-20" />
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#30D158]/20 border border-[#30D158]/30 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4C8.5 4 6 7 6 10c0 2 .8 3.8 2 5h8c1.2-1.2 2-3 2-5 0-3-2.5-6-6-6z" fill="rgba(48,209,88,0.8)"/>
                    <rect x="4" y="15" width="16" height="1.5" rx="0.75" fill="rgba(48,209,88,0.5)"/>
                    <rect x="7" y="16.5" width="10" height="1.5" rx="0.75" fill="rgba(48,209,88,0.4)"/>
                    <line x1="12" y1="4" x2="12" y2="2" stroke="rgba(48,209,88,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="1.5" r="0.8" fill="rgba(48,209,88,0.9)"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#EDEDEF]">Используется тысячами мусульман</p>
                  <p className="text-xs text-[#8A8F98] mt-0.5">Растущее сообщество по всему миру</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
