import CertificatesSC from "@/app/_components/CertificatesSC";
import QuestionSc from "@/app/_components/QuestionSc";
import AboutAndApproach from "@/app/_ui/AboutAndApproach";
import ActionButtons from "@/app/_ui/ActionButtons";
import WhatIOfferSc from "@/app/_ui/WhatIOfferSc";

const { default: AboutHero } = require("@/app/_components/AboutHero");

export const metadata = {
  title: "About ",
  description:
    "Learn about Yossef Weal, his development approach, skills, and portfolio projects.",
  keywords: [
    "Yossef Weal",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Full Stack",
  ],
  authors: [
    { name: "Yossef Weal", url: "https://portfolio-yossef-weal.netlify.app" },
  ],
  openGraph: {
    title: "About Yossef Weal",
    description:
      "Learn about Yossef Weal, his development approach, skills, and portfolio projects.",
    url: "https://portfolio-yossef-weal.netlify.app/about",
    siteName: "Yossef Weal Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://portfolio-yossef-weal.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "About Yossef Weal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Yossef Weal",
    description:
      "Learn about Yossef Weal, his development approach, skills, and portfolio projects.",
    images: ["https://yossef.3a-d.com/uploads/yossef_weal_7aa0ad5289.jpg"],
    site: "@YossefWeal",
    creator: "@YossefWeal",
  },
};

export default async function page({ params }) {
  const { locale } = await params;

  return (
    <div className="text-white mt-30 px-4 md:px-10 py-2 md:py-5 flex flex-col items-center justify-center gap-3">
      <AboutHero locale={locale} />
      <AboutAndApproach />
      <CertificatesSC locale={locale} />
      <WhatIOfferSc />
      <QuestionSc />
      <div className="flex w-full items-center justify-center mt-5 pt-5 border-t-2 border-white/20">
        <ActionButtons />
      </div>
    </div>
  );
}
