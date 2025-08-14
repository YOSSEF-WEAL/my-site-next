"use client";

import { useLocale } from "next-intl";

/**
 * Hook يرجع اللغة الحالية في المشروع
 * @returns {string} اللغة الحالية (مثلاً: "en" أو "ar")
 */
export default function useLanguage() {
  const locale = useLocale();
  return locale;
}
