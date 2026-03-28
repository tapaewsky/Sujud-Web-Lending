"use client";

const testimonials = [
  {
    quote: "Я часто путешествую по работе, и Sujud стал для меня настоящим спасением. Нашёл мечеть в незнакомом городе буквально за несколько минут.",
    author: "Ахмад К.",
    location: "Дубай, ОАЭ",
    rating: 5,
  },
  {
    quote: "Самый полный каталог мечетей, которым я пользовался. Сообщество добавляет новые места каждый день — это впечатляет.",
    author: "Фатима Р.",
    location: "Лондон, Великобритания",
    rating: 5,
  },
  {
    quote: "Просто, быстро и точно. Именно то, что нужно каждому мусульманину-путешественнику на телефоне.",
    author: "Юсуф М.",
    location: "Нью-Йорк, США",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? "#F59E0B" : "rgba(255,255,255,0.12)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="community" className="relative py-24 md:py-32 px-6 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4"
          style={{
            width: "500px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(48,209,88,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        <div className="text-center mb-16 fade-up-element">
          <span className="inline-block text-xs font-mono tracking-widest text-[#30D158] uppercase mb-4 border border-[#30D158]/30 rounded-full px-3 py-1 bg-[#30D158]/10">
            Сообщество
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDEF] mb-4">
            Доверяют мусульмане{" "}
            <span className="gradient-text-accent">по всему миру</span>
          </h2>
          <p className="text-[#8A8F98] text-lg max-w-xl mx-auto leading-relaxed">
            Тысячи пользователей ежедневно доверяют Sujud. Вот что говорит сообщество.
          </p>
        </div>

        {/* Stats strip */}
        <div className="fade-up-element grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "4.8", label: "Рейтинг App Store", suffix: "★" },
            { value: "10 000+", label: "Активных пользователей", suffix: "" },
            { value: "15 000+", label: "Мечетей в базе", suffix: "" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1] transition-all duration-300"
            >
              <p className="text-2xl md:text-3xl font-semibold text-[#EDEDEF] tracking-tight">
                {stat.value}
                <span className="text-[#30D158]">{stat.suffix}</span>
              </p>
              <p className="text-xs text-[#8A8F98] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up-element card-spotlight group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 hover:border-white/[0.1] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(48,209,88,0.06)] transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-4 right-5 text-5xl text-[#30D158]/10 font-serif leading-none select-none">&ldquo;</div>

              <StarRating count={t.rating} />

              <p className="mt-4 text-sm text-[#8A8F98] leading-relaxed">&laquo;{t.quote}&raquo;</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#30D158]/40 to-[#30D158]/10 border border-[#30D158]/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#30D158]">{t.author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EDEDEF]">{t.author}</p>
                  <p className="text-xs text-[#8A8F98]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community badge */}
        <div className="mt-12 text-center fade-up-element">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.03]">
            <div className="flex -space-x-1.5">
              {["#30D158", "#34D862", "#22c55e", "#16a34a"].map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-[#050506] flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: `${color}40`, borderColor: color, zIndex: 4 - i }}
                >
                  {["А","Ф","Ю","М"][i]}
                </div>
              ))}
            </div>
            <div className="w-px h-4 bg-white/[0.08]" />
            <span className="text-sm text-[#8A8F98]">
              <span className="text-[#EDEDEF] font-medium">Растущее сообщество</span> мусульман по всему миру
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400/80">Онлайн</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
