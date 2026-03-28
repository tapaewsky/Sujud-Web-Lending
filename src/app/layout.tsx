import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujud — Находите мечети где угодно и когда угодно",
  description:
    "Легко находите ближайшие мечети и места для молитвы. Создано для мусульман всего мира. 15 000+ мечетей по всему миру.",
  keywords: ["поиск мечетей", "места для молитвы", "приложение для мусульман", "кибла", "исламское приложение"],
  openGraph: {
    title: "Sujud — Находите мечети где угодно и когда угодно",
    description:
      "Легко находите ближайшие мечети и места для молитвы. Создано для мусульман всего мира.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-texture grid-overlay antialiased">{children}</body>
    </html>
  );
}
