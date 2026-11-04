import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { sharedProfile } from "@/lib/content";
import { LocaleProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

const siteTitle = `${sharedProfile.name} — Mobile Developer & Full Stack Developer`;
const siteDescription =
  "Reliable programmer with hands-on experience improving software stability through testing, debugging, and clean-code practices, building cross-platform mobile applications with Flutter and React Native and backend services with Go and PHP.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Mobile Developer",
    "Backend Developer",
    "Flutter Developer",
    "React Native Developer",
    "Go Developer",
    "PHP Developer",
    "Programmer",
    "Nonthaburi",
    "Thailand",
    "นักพัฒนาแอปพลิเคชันมือถือ",
    "นักพัฒนาแบ็กเอนด์",
  ],
  authors: [{ name: sharedProfile.name }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansThai.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
