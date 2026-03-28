"use client";

import { useEffect, useRef } from "react";

function MapPin({ x, y, delay = 0, size = "md" }: { x: number; y: number; delay?: number; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: 6, md: 8, lg: 10 };
  const px = sizes[size];
  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
    >
      <div className="relative flex items-center justify-center" style={{ width: px * 4, height: px * 4 }}>
        <div
          className="absolute rounded-full bg-[#30D158] map-ping"
          style={{ width: px * 2, height: px * 2, animationDelay: `${delay}s` }}
        />
        <div
          className="relative rounded-full bg-[#30D158] shadow-[0_0_10px_rgba(48,209,88,0.8)]"
          style={{ width: px, height: px }}
        />
      </div>
    </div>
  );
}

function MapVisual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-[#30D158] opacity-10 blur-3xl scale-110" />

      <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_32px_80px_rgba(0,0,0,0.6),0_0_80px_rgba(48,209,88,0.08)]">

        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.03]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 bg-white/[0.06] rounded-lg px-3 py-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <span className="text-[10px] text-white/30 font-mono">Мечети рядом с вами</span>
            </div>
          </div>
        </div>

        {/* Map area */}
        <div className="relative h-72 md:h-96 bg-[#0a0a0f] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
          </svg>

          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.06)" strokeWidth="2"/>
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <path d="M 0 65% Q 40% 55% 60% 70% T 100% 60%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2"/>
          </svg>

          <div className="absolute inset-0">
            <div className="absolute bg-white/[0.03] rounded-sm" style={{left:'5%', top:'15%', width:'18%', height:'20%'}} />
            <div className="absolute bg-white/[0.03] rounded-sm" style={{left:'5%', top:'60%', width:'20%', height:'15%'}} />
            <div className="absolute bg-white/[0.03] rounded-sm" style={{left:'35%', top:'10%', width:'25%', height:'15%'}} />
            <div className="absolute bg-white/[0.03] rounded-sm" style={{left:'35%', top:'60%', width:'15%', height:'20%'}} />
            <div className="absolute bg-white/[0.04] rounded-sm" style={{left:'75%', top:'15%', width:'20%', height:'25%'}} />
            <div className="absolute bg-white/[0.03] rounded-sm" style={{left:'75%', top:'65%', width:'18%', height:'18%'}} />
          </div>

          <div className="absolute inset-0 islamic-pattern opacity-30" />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-[#30D158]/10 blur-3xl" />
          </div>

          <MapPin x={29} y={42} size="lg" delay={0} />
          <MapPin x={62} y={28} size="md" delay={0.5} />
          <MapPin x={18} y={68} size="sm" delay={1.0} />
          <MapPin x={78} y={55} size="sm" delay={1.5} />
          <MapPin x={48} y={72} size="sm" delay={0.8} />

          {/* User location */}
          <div className="absolute" style={{left:'45%', top:'48%'}}>
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
              <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
            </div>
          </div>

          {/* Mosque popup */}
          <div
            className="absolute bg-[#0f0f18]/95 backdrop-blur-xl border border-white/[0.1] rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] w-44"
            style={{ left: '26%', top: '8%' }}
          >
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#30D158]/20 border border-[#30D158]/30 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#30D158">
                  <path d="M12 4C8.5 4 6 7 6 10c0 2 .8 3.8 2 5h8c1.2-1.2 2-3 2-5 0-3-2.5-6-6-6z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-[#EDEDEF] truncate">Мечеть Ан-Нур</p>
                <p className="text-[10px] text-[#8A8F98] mt-0.5">0.3 км от вас</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-px">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="6" height="6" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-[9px] text-[#8A8F98]">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0a0a10]/90 backdrop-blur-sm border border-white/[0.08] rounded-full px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-[#8A8F98] font-mono">Онлайн</span>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[10px] text-[#8A8F98]">Рядом</p>
              <p className="text-xs font-semibold text-[#EDEDEF]">12 мечетей</p>
            </div>
            <div className="w-px h-6 bg-white/[0.06]" />
            <div>
              <p className="text-[10px] text-[#8A8F98]">Ближайшая</p>
              <p className="text-xs font-semibold text-[#EDEDEF]">0.3 км</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#30D158] text-[10px] font-medium text-white shadow-[0_0_12px_rgba(48,209,88,0.4)]">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Маршрут
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.5;
      const progress = Math.min(scrollY / maxScroll, 1);
      heroRef.current.style.opacity = `${1 - progress * 0.8}`;
      heroRef.current.style.transform = `translateY(${progress * 60}px) scale(${1 - progress * 0.03})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-float-1"
          style={{
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "700px",
            background: "radial-gradient(ellipse, rgba(48,209,88,0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute animate-float-2"
          style={{
            top: "20%",
            left: "-15%",
            width: "600px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(74,222,128,0.12) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute animate-float-3"
          style={{
            top: "15%",
            right: "-15%",
            width: "500px",
            height: "600px",
            background: "radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "800px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(48,209,88,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#30D158] border border-[#30D158]/30 rounded-full px-3 py-1 bg-[#30D158]/10 uppercase">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            На основе сообщества
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-[#8A8F98] border border-white/[0.06] rounded-full px-3 py-1">
            <span className="text-emerald-400">●</span>
            Новые мечети добавляются ежедневно
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-none mb-6">
          <span className="gradient-text">Находите мечети</span>
          <br />
          <span className="gradient-text">где угодно,</span>{" "}
          <span className="gradient-text-accent">когда угодно</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#8A8F98] leading-relaxed max-w-xl mb-8">
          Легко находите ближайшие мечети и места для молитвы.
          <br className="hidden sm:block" />
          Создано для мусульман всего мира.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#30D158] hover:bg-[#34D862] text-white font-semibold text-base transition-all duration-200 shadow-[0_0_0_1px_rgba(48,209,88,0.5),0_4px_12px_rgba(48,209,88,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_1px_rgba(104,114,217,0.6),0_8px_32px_rgba(48,209,88,0.5),inset_0_1px_0_0_rgba(255,255,255,0.25)] active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Скачать в App Store</span>
          </a>

          {/* Trust text */}
          <div className="flex items-center gap-3 text-sm text-[#8A8F98]">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(48,209,88,0.7)" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              15 000+ мечетей по всему миру
            </span>
            <span className="text-white/10">·</span>
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Рейтинг 4.8
            </span>
          </div>
        </div>

        {/* Map visual */}
        <div className="mt-16 w-full fade-up-element visible">
          <MapVisual />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050506] to-transparent pointer-events-none" />
    </section>
  );
}
