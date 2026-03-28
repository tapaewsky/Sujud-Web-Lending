"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    label: "Ближайшие мечети",
    title: "Найдите мечеть рядом",
    description: "Мгновенно находите мечети и места для молитвы рядом с вами с помощью GPS и сортировки по расстоянию.",
    span: "col-span-1 md:col-span-2",
    accent: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: "Глобальная база",
    title: "15 000+ по всему миру",
    description: "Обширная база данных мечетей и молитвенных комнат в более чем 100 странах мира.",
    span: "col-span-1",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
      </svg>
    ),
    label: "Вклад сообщества",
    title: "Добавляйте новые места",
    description: "Помогайте сообществу расти, добавляя мечети и молитвенные комнаты, которые вы нашли.",
    span: "col-span-1",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    label: "Умная навигация",
    title: "Пошаговые маршруты",
    description: "Бесшовная интеграция с Apple Maps и Google Maps для точной навигации до любой мечети.",
    span: "col-span-1",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: "Проверенные места",
    title: "Подтверждено сообществом",
    description: "Каждое место проверяется участниками сообщества на точность и достоверность.",
    span: "col-span-1",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    label: "Быстро и легко",
    title: "Оптимизированная работа",
    description: "Создано для скорости. Мгновенная загрузка, офлайн-режим и минимальный расход батареи.",
    span: "col-span-1 md:col-span-2",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`fade-up-element card-spotlight group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition-all duration-300 cursor-default hover:border-white/[0.1] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(48,209,88,0.06)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4)] ${feature.span}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {feature.accent && (
        <div className="absolute inset-0 rounded-2xl border border-[#30D158]/20 group-hover:border-[#30D158]/40 transition-colors duration-300 pointer-events-none" />
      )}

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(48,209,88,0.3)" strokeWidth="0.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      </div>

      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
          feature.accent
            ? "bg-[#30D158]/20 text-[#30D158] border border-[#30D158]/30 group-hover:bg-[#30D158]/30 group-hover:shadow-[0_0_16px_rgba(48,209,88,0.3)]"
            : "bg-white/[0.06] text-[#8A8F98] border border-white/[0.08] group-hover:bg-white/[0.1] group-hover:text-[#EDEDEF]"
        }`}
      >
        {feature.icon}
      </div>

      <p className="text-xs font-mono tracking-widest text-[#30D158]/70 uppercase mb-2">{feature.label}</p>
      <h3 className="text-lg font-semibold text-[#EDEDEF] tracking-tight mb-2">{feature.title}</h3>
      <p className="text-sm text-[#8A8F98] leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function Features() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up-element");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        <div className="text-center mb-16 fade-up-element">
          <span className="inline-block text-xs font-mono tracking-widest text-[#30D158] uppercase mb-4 border border-[#30D158]/30 rounded-full px-3 py-1 bg-[#30D158]/10">
            Возможности
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDEF] mb-4">
            Всё необходимое, чтобы{" "}
            <span className="gradient-text-accent">не пропустить молитву</span>
          </h2>
          <p className="text-[#8A8F98] text-lg max-w-xl mx-auto leading-relaxed">
            Разработано с точностью для мусульман повсюду. Быстро, точно и на основе сообщества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.label} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
