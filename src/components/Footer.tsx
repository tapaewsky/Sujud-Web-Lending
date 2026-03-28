export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020203]">

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#30D158]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-[10px] overflow-hidden shadow-[0_0_12px_rgba(48,209,88,0.4)] flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Sujud logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#EDEDEF] font-semibold tracking-tight">Sujud</span>
            </div>
            <p className="text-xs text-[#8A8F98]">Находите мечети где угодно и когда угодно.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200">
              Политика конфиденциальности
            </a>
            <span className="text-white/[0.1]">·</span>
            <a href="/terms" className="text-xs text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200">
              Условия использования
            </a>
            <span className="text-white/[0.1]">·</span>
            <a href="mailto:sujudapp@mail.ru" className="text-xs text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200">
              Контакты
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-[#8A8F98]/60">
              &copy; {new Date().getFullYear()} Sujud. Все права защищены.
            </p>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#30D158]/20" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="rgba(48,209,88,0.6)" strokeWidth="1" fill="none"/>
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#30D158]/20" />
        </div>
      </div>
    </footer>
  );
}
