"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function SwitchLanguage() {
  const locale = useLocale();
  const pathname = usePathname();

  const isArabic = locale === "ar";
  const targetLocale = isArabic ? "en" : "ar";
  const label = isArabic ? "English" : "العربية";

  return (
    <Link
      className="block px-4 py-2 rounded-full text-center text-lg cursor-pointer hover:bg-primary transition-colors w-full bg-white/20"
      href={`/${targetLocale}${pathname.replace(`/${locale}`, "")}`}
    >
      {label}
    </Link>
  );
}
