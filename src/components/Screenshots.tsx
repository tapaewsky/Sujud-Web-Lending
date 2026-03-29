"use client";

/* ─── Reusable toggle ────────────────────────────────── */
function Toggle({ on = false }: { on?: boolean }) {
  return (
    <div style={{ width: 26, height: 15, borderRadius: 8, background: on ? "#30D158" : "rgba(255,255,255,0.15)", position: "relative", flexShrink: 0 }}>
      <div style={{ position: "absolute", top: 2, left: on ? 13 : 2, width: 11, height: 11, borderRadius: "50%", background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }} />
    </div>
  );
}

/* ─── Status bar ─────────────────────────────────────── */
function StatusBar({ time = "22:37" }: { time?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px 4px", height: 40 }}>
      <span style={{ fontSize: 8.5, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{time}</span>
      <div style={{ width: 40, height: 8, background: "black", borderRadius: 5 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
        <svg width="10" height="8" viewBox="0 0 20 14" fill="none">
          <rect x="0" y="8" width="3" height="6" rx="1" fill="rgba(255,255,255,0.85)" />
          <rect x="4.5" y="5.5" width="3" height="8.5" rx="1" fill="rgba(255,255,255,0.85)" />
          <rect x="9" y="3" width="3" height="11" rx="1" fill="rgba(255,255,255,0.85)" />
          <rect x="13.5" y="0" width="3" height="14" rx="1" fill="rgba(255,255,255,0.4)" />
        </svg>
        <svg width="10" height="8" viewBox="0 0 20 16" fill="none">
          <path d="M10 12.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="rgba(255,255,255,0.85)" />
          <path d="M4.5 9C6.5 7 8.2 6 10 6s3.5 1 5.5 3" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M1 5.5C4 2.5 7 1 10 1s6 1.5 9 4.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 16, height: 8, borderRadius: 2, border: "1px solid rgba(255,255,255,0.4)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 1, top: 1, bottom: 1, width: "57%", borderRadius: 1, background: "rgba(255,255,255,0.85)" }} />
          </div>
          <div style={{ width: 2, height: 4, borderRadius: "0 1px 1px 0", background: "rgba(255,255,255,0.4)", marginLeft: 1 }} />
        </div>
      </div>
    </div>
  );
}

function HomeBar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 10px" }}>
      <div style={{ width: 60, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.28)" }} />
    </div>
  );
}

/* ─── MAP screen ─────────────────────────────────────── */
function MapScreen() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#0f1117" }}>
      <StatusBar time="22:37" />
      <div style={{ padding: "0 10px 6px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.09)", borderRadius: 12, padding: "6px 10px" }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.22)" }}>Поиск мечетей...</span>
        </div>
      </div>
      {/* Map area */}
      <div style={{ flex: 1, margin: "0 10px", borderRadius: 14, background: "#141921", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}>
          <defs>
            <pattern id="mg2" width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M 22 0 L 0 0 0 22" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mg2)" />
        </svg>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
          <line x1="32%" y1="0" x2="32%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
          <line x1="68%" y1="0" x2="68%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
        </svg>
        {[
          {l:"6%",t:"12%",w:"16%",h:"17%"},{l:"35%",t:"8%",w:"22%",h:"13%"},
          {l:"73%",t:"13%",w:"18%",h:"21%"},{l:"6%",t:"62%",w:"19%",h:"13%"},
          {l:"35%",t:"61%",w:"13%",h:"18%"},{l:"73%",t:"63%",w:"15%",h:"15%"},
        ].map((b, i) => (
          <div key={i} style={{ position: "absolute", left: b.l, top: b.t, width: b.w, height: b.h, background: "rgba(255,255,255,0.04)", borderRadius: 3 }} />
        ))}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(48,209,88,0.08)", filter: "blur(18px)" }} />
        </div>
        {[{x:28,y:40,s:7},{x:63,y:26,s:6},{x:17,y:67,s:5},{x:78,y:56,s:5},{x:49,y:73,s:5}].map((p, i) => (
          <div key={i} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%` }}>
            <div style={{ position: "relative", width: p.s * 3, height: p.s * 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="map-ping" style={{ position: "absolute", width: p.s * 2, height: p.s * 2, borderRadius: "50%", background: "rgba(48,209,88,0.25)", animationDelay: `${i * 0.5}s` }} />
              <div style={{ width: p.s, height: p.s, borderRadius: "50%", background: "#30D158", boxShadow: "0 0 8px rgba(48,209,88,0.9)" }} />
            </div>
          </div>
        ))}
        <div style={{ position: "absolute", left: "46%", top: "49%" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3B82F6", border: "2px solid white", boxShadow: "0 0 10px rgba(59,130,246,0.8)", position: "relative" }}>
            <div className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(59,130,246,0.3)" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "22%", top: "6%", width: 76, background: "rgba(18,20,28,0.96)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 18, height: 18, borderRadius: 6, background: "rgba(48,209,88,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="#30D158">
                <path d="M12 4C8.5 4 6 7 6 10c0 2 .8 3.8 2 5h8c1.2-1.2 2-3 2-5 0-3-2.5-6-6-6z" />
                <rect x="6" y="15" width="12" height="1.5" rx="0.75" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 6.5, fontWeight: 600, color: "#EDEDEF" }}>Мечеть Ан-Нур</p>
              <p style={{ fontSize: 5.5, color: "#8A8F98" }}>0.3 км · Открыта</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", top: 8, right: 8, display: "flex", alignItems: "center", gap: 4, background: "rgba(12,14,20,0.9)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "3px 7px" }}>
          <div className="animate-pulse" style={{ width: 4, height: 4, borderRadius: "50%", background: "#30D158" }} />
          <span style={{ fontSize: 5.5, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>Live</span>
        </div>
      </div>
      <div style={{ padding: "6px 10px" }}>
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: 6, color: "#8A8F98", marginBottom: 2 }}>Ближайшая</p>
            <p style={{ fontSize: 8, fontWeight: 600, color: "#EDEDEF" }}>Мечеть Ар-Рахман</p>
            <p style={{ fontSize: 5.5, color: "#30D158", marginTop: 1 }}>0.2 км · Открыта</p>
          </div>
          <div style={{ background: "#30D158", borderRadius: 10, padding: "5px 8px", display: "flex", alignItems: "center", gap: 4, boxShadow: "0 0 12px rgba(48,209,88,0.5)" }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="white"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
            <span style={{ fontSize: 6.5, fontWeight: 600, color: "white" }}>Маршрут</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "6px 16px 2px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {[
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="#30D158"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>, label: "Карта", active: true },
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" strokeLinecap="round" /></svg>, label: "Список", active: false },
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>, label: "Добавить", active: false },
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>, label: "Профиль", active: false },
        ].map((t) => (
          <div key={t.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            {t.icon}
            <span style={{ fontSize: 4.5, color: t.active ? "#30D158" : "rgba(255,255,255,0.3)", fontWeight: t.active ? 600 : 400 }}>{t.label}</span>
          </div>
        ))}
      </div>
      <HomeBar />
    </div>
  );
}

/* ─── LIST screen ────────────────────────────────────── */
function ListScreen() {
  const items = [
    { name: "Мечеть Ан-Нур", dist: "0.3 км", rating: 5, open: true },
    { name: "Исламский центр", dist: "0.7 км", rating: 5, open: true },
    { name: "Маджид Ас-Салам", dist: "1.1 км", rating: 4, open: false },
    { name: "Мечеть Аль-Худа", dist: "1.5 км", rating: 5, open: true },
    { name: "Мечеть Рахман", dist: "1.9 км", rating: 4, open: true },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#111318" }}>
      <StatusBar time="22:37" />
      <div style={{ padding: "0 12px 6px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#EDEDEF", letterSpacing: -0.3 }}>Ближайшие мечети</p>
        <p style={{ fontSize: 7, color: "#8A8F98", marginTop: 2 }}>12 найдено в радиусе 2 км</p>
      </div>
      <div style={{ display: "flex", gap: 5, padding: "0 12px 8px" }}>
        {["Все", "Открытые", "Рядом"].map((c, i) => (
          <div key={c} style={{ borderRadius: 20, padding: "2px 8px", background: i === 0 ? "#30D158" : "rgba(255,255,255,0.07)", border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{ fontSize: 6, color: i === 0 ? "white" : "rgba(255,255,255,0.5)", fontWeight: i === 0 ? 600 : 400 }}>{c}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, overflow: "hidden", padding: "0 10px", display: "flex", flexDirection: "column", gap: 5 }}>
        {items.map((m, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "7px 10px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 10, background: "rgba(48,209,88,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#30D158">
                <path d="M12 4C8.5 4 6 7 6 10c0 2 .8 3.8 2 5h8c1.2-1.2 2-3 2-5 0-3-2.5-6-6-6z" />
                <rect x="6" y="15" width="12" height="1.5" rx="0.75" opacity="0.7" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 8, fontWeight: 600, color: "#EDEDEF", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.name}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                <div style={{ display: "flex", gap: 1 }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="5" height="5" viewBox="0 0 24 24" fill={s <= m.rating ? "#F59E0B" : "rgba(255,255,255,0.15)"}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: 5.5, color: "#8A8F98" }}>{m.dist}</span>
              </div>
            </div>
            <span style={{ fontSize: 5.5, padding: "2px 5px", borderRadius: 8, background: m.open ? "rgba(48,209,88,0.15)" : "rgba(255,255,255,0.06)", color: m.open ? "#30D158" : "#8A8F98", flexShrink: 0 }}>
              {m.open ? "Открыта" : "Закрыта"}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "6px 16px 2px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {[
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>, label: "Карта", active: false },
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="#30D158"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>, label: "Список", active: true },
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>, label: "Добавить", active: false },
          { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>, label: "Профиль", active: false },
        ].map((t) => (
          <div key={t.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            {t.icon}
            <span style={{ fontSize: 4.5, color: t.active ? "#30D158" : "rgba(255,255,255,0.3)", fontWeight: t.active ? 600 : 400 }}>{t.label}</span>
          </div>
        ))}
      </div>
      <HomeBar />
    </div>
  );
}

/* ─── iPhone mockup frame ────────────────────────────────────────────────
   Mockup PNG: 1882 × 3878 px  →  aspect ratio height/width = 2.061
   Screen insets (empirical): top 6.5%, bottom 3.8%, sides 5%
   mix-blend-mode: multiply  →  white screen area becomes transparent,
   black frame stays solid black                                         */
const MOCKUP_RATIO = 3878 / 1882;

interface PhoneFrameProps {
  children: React.ReactNode;
  width: number;
  featured?: boolean;
}

function PhoneFrame({ children, width, featured = false }: PhoneFrameProps) {
  const height = Math.round(width * MOCKUP_RATIO);

  return (
    <div style={{ position: "relative", width, height, flexShrink: 0 }}>
      {/* Screen content — fills entire frame; mockup PNG clips it visually */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          background: "#111318",
        }}
      >
        {children}
      </div>

      {/* Mockup PNG overlay — multiply blend makes white transparent */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/iphone-mockup.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          pointerEvents: "none",
          mixBlendMode: "multiply",
          userSelect: "none",
          display: "block",
        }}
      />

      {/* Glow under featured phone */}
      {featured && (
        <div
          style={{
            position: "absolute",
            bottom: -24,
            left: "15%",
            right: "15%",
            height: 40,
            background: "rgba(48,209,88,0.2)",
            filter: "blur(24px)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

/* ─── Section ────────────────────────────────────────── */
export default function Screenshots() {
  const featuredW = 192;
  const sideW = 154;

  return (
    <section id="screenshots" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(48,209,88,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* Header */}
        <div className="text-center mb-16 fade-up-element">
          <span className="inline-block text-xs font-mono tracking-widest text-[#30D158] uppercase mb-4 border border-[#30D158]/30 rounded-full px-3 py-1 bg-[#30D158]/10">
            Приложение
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDEF] mb-4">
            Красиво просто,{" "}
            <span className="gradient-text-accent">мощно точно</span>
          </h2>
          <p className="text-[#8A8F98] text-lg max-w-lg mx-auto leading-relaxed">
            Каждый экран разработан, чтобы найти ближайшее место для молитвы за секунды.
          </p>
        </div>

        {/* Desktop: 3 phones */}
        <div className="hidden sm:flex items-end justify-center gap-8 md:gap-12">

          {/* Left */}
          <div
            className="fade-up-element flex flex-col items-center gap-3"
            style={{ transform: "rotate(-4deg)", transformOrigin: "bottom center" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screen-2.png"
              alt="Список мечетей в Sujud"
              style={{ width: sideW, display: "block" }}
            />
            <p className="text-xs font-medium" style={{ color: "#8A8F98" }}>Список мечетей</p>
          </div>

          {/* Center */}
          <div
            className="fade-up-element flex flex-col items-center gap-3"
            style={{ transform: "translateY(-20px)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screen-1.png"
              alt="Карта мечетей в Sujud"
              style={{ width: featuredW, display: "block", filter: "drop-shadow(0 0 40px rgba(48,209,88,0.25))" }}
            />
            <p className="text-xs font-medium" style={{ color: "#8A8F98" }}>Карта мечетей</p>
          </div>

          {/* Right */}
          <div
            className="fade-up-element flex flex-col items-center gap-3"
            style={{ transform: "rotate(4deg)", transformOrigin: "bottom center" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screen-3.png"
              alt="Детали мечети в Sujud"
              style={{ width: sideW, display: "block" }}
            />
            <p className="text-xs font-medium" style={{ color: "#8A8F98" }}>Детали места</p>
          </div>
        </div>

        {/* Mobile: single phone */}
        <div className="sm:hidden flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screen-1.png"
            alt="Карта мечетей в Sujud"
            style={{ width: featuredW, display: "block" }}
          />
          <p className="text-xs font-medium" style={{ color: "#8A8F98" }}>Карта мечетей</p>
        </div>
      </div>
    </section>
  );
}
