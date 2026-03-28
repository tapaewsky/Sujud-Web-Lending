import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия использования — Sujud",
  description: "Условия использования приложения Sujud.",
};

const sections = [
  {
    number: "1",
    title: "Общие положения",
    content: (
      <>
        <p className="mb-2">
          Настоящие Условия использования регулируют использование мобильного приложения Sujud («Приложение»). Используя приложение, вы соглашаетесь с данными условиями.
        </p>
        <p className="text-[#8A8F98]/80 text-sm border-l-2 border-[#30D158]/40 pl-3">
          Если вы не согласны с условиями, пожалуйста, не используйте приложение.
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Описание сервиса",
    content: (
      <p>
        Sujud — это приложение для поиска мечетей и молельных комнат, а также добавления новых мест пользователями.
      </p>
    ),
  },
  {
    number: "3",
    title: "Регистрация и доступ",
    content: (
      <ul>
        <li>Для использования некоторых функций требуется вход через Sign in with Apple.</li>
        <li>Вы обязуетесь предоставлять достоверную информацию и не использовать чужие данные.</li>
      </ul>
    ),
  },
  {
    number: "4",
    title: "Пользовательский контент",
    content: (
      <>
        <p className="mb-3">Пользователи могут добавлять информацию (мечети, молельные комнаты и др.).</p>
        <p className="mb-3">Вы соглашаетесь, что:</p>
        <ul className="mb-4">
          <li>не будете публиковать ложную или вводящую в заблуждение информацию</li>
          <li>не будете размещать запрещённый или оскорбительный контент</li>
          <li>несёте ответственность за добавленные вами данные</li>
        </ul>
        <p className="text-[#8A8F98]/80 text-sm border-l-2 border-[#30D158]/40 pl-3">
          Мы оставляем за собой право удалять любой контент без объяснения причин.
        </p>
      </>
    ),
  },
  {
    number: "5",
    title: "Ограничение ответственности",
    content: (
      <>
        <p className="mb-3">Приложение предоставляется «как есть».</p>
        <p className="mb-3">Мы не гарантируем:</p>
        <ul className="mb-4">
          <li>точность или актуальность информации</li>
          <li>бесперебойную работу приложения</li>
          <li>отсутствие ошибок</li>
        </ul>
        <p className="text-[#8A8F98]/80 text-sm border-l-2 border-[#30D158]/40 pl-3">
          Мы не несём ответственности за любые убытки, возникшие при использовании приложения.
        </p>
      </>
    ),
  },
  {
    number: "6",
    title: "Использование данных",
    content: (
      <p>
        Использование данных регулируется нашей{" "}
        <a href="/privacy" className="text-[#30D158] hover:text-[#34D862] transition-colors duration-200 underline underline-offset-2">
          Политикой конфиденциальности
        </a>
        .
      </p>
    ),
  },
  {
    number: "7",
    title: "Прекращение доступа",
    content: (
      <p>
        Мы можем ограничить или заблокировать доступ к приложению в случае нарушения данных условий.
      </p>
    ),
  },
  {
    number: "8",
    title: "Изменения условий",
    content: (
      <p>
        Мы можем обновлять данные условия в любое время. Продолжение использования приложения означает согласие с обновлениями.
      </p>
    ),
  },
  {
    number: "9",
    title: "Контакты",
    content: (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#30D158]/10 border border-[#30D158]/20 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#30D158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 7L2 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-[#8A8F98] mb-0.5">По всем вопросам:</p>
          <a
            href="mailto:sujudapp@mail.ru"
            className="text-sm text-[#30D158] hover:text-[#34D862] transition-colors duration-200 font-medium"
          >
            sujudapp@mail.ru
          </a>
        </div>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020203]">
      <Navbar />

      <main className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "600px",
              height: "400px",
              background: "radial-gradient(ellipse, rgba(48,209,88,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block text-xs font-mono tracking-widest text-[#30D158] uppercase mb-4 border border-[#30D158]/30 rounded-full px-3 py-1 bg-[#30D158]/10">
              Юридическая информация
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#EDEDEF] mb-3">
              Условия использования
            </h1>
            <p className="text-sm text-[#8A8F98]">
              Дата последнего обновления: <span className="text-[#EDEDEF]/70">29.03.2026</span>
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <div
                key={section.number}
                className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Number badge */}
                  <div className="w-8 h-8 rounded-xl bg-[#30D158]/10 border border-[#30D158]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-[#30D158]">{section.number}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold text-[#EDEDEF] mb-3 tracking-tight">
                      {section.title}
                    </h2>
                    <div className="text-sm text-[#8A8F98] leading-relaxed [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:mt-1 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:content-['—'] [&_li]:before:text-[#30D158]/60 [&_li]:before:flex-shrink-0 [&_p]:leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom ornament */}
          <div className="mt-12 flex items-center justify-center gap-4 opacity-30">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#30D158]/20" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="rgba(48,209,88,0.6)" strokeWidth="1" fill="none"/>
            </svg>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#30D158]/20" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
