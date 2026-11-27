import type { Metadata } from "next";
import "./globals.css";
import "./favorites.css";
import "./discovery.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Happy Meal · Sổ ăn uống và lịch hẹn",
  description: "Lưu quán, chọn món và để dành những cuộc hẹn ở Sài Gòn cho hai đứa mình.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html: `(function(){try{var p=localStorage.getItem('hen-saigon-theme');var t=p==='light'||p==='dark'?p:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.dataset.theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}})();`}} /></head>
      <body className="antialiased"><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
