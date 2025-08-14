import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Header from "../_components/Header";
import AOSWrapper from "../_components/AOSWrapper"; // ملف client لتشغيل AOS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s / Yossef Weal",
    default: "Yossef Weal Front-End Developer",
  },
  description:
    "Welcome to my digital space! I'm a Front-End Web Developer and UI/UX Designer with over two years of experience. I build modern web apps with Next.js, React, and Tailwind CSS, plus fully functional websites with WordPress and Strapi, featuring custom front-end designs. I focus on efficient, user-friendly experiences with seamless backend integration.",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white max-w-full md:max-w-[1350px] mx-auto `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AOSWrapper>
            <Header />
            <main>{children}</main>
          </AOSWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
