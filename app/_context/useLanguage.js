"use client";

import { useLocale } from "next-intl";

/**
 * @returns {string} 
 */
export default function useLanguage()
{
  const locale = useLocale();
  return locale;
}
