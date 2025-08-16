import ContactForm from "@/app/_ui/ContactForm";
import FollowMe from "@/app/_ui/FollowMe";
import Heding from "@/app/_ui/Heding";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Yossef Weal for web development projects, collaborations, or inquiries about React, Next.js, and full-stack solutions.",
  keywords: [
    "Yossef Weal",
    "Contact",
    "Web Developer",
    "React",
    "Next.js",
    "Full Stack",
    "Hire Developer",
    "Portfolio",
  ],
  authors: [
    { name: "Yossef Weal", url: "https://portfolio-yossef-weal.netlify.app" },
  ],
  openGraph: {
    title: "Contact Yossef Weal",
    description:
      "Reach out to Yossef Weal for professional web development services, project collaborations, or inquiries.",
    url: "https://portfolio-yossef-weal.netlify.app/contact",
    siteName: "Yossef Weal Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://portfolio-yossef-weal.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Yossef Weal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yossef Weal",
    description:
      "Connect with Yossef Weal for web development services, freelance opportunities, or technical collaborations.",
    images: ["https://yossef.3a-d.com/uploads/yossef_weal_contact.jpg"],
    site: "@YossefWeal",
    creator: "@YossefWeal",
  },
};

function page({ params }) {
  const { locale } = params;

  const t = useTranslations("Contact_Me_Page");

  return (
    <section id="contact" className="relative mt-30 px-5 md:px-10 mb-10">
      <Heding textWhite={t("Heding.white")} textPrimary={t("Heding.primry")} />

      <div className="w-full flex items-start justify-between flex-col md:flex-row gap-5">
        <FollowMe locale={locale} />
        <ContactForm />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-90 left-[0%] -z-10 w-full h-[60vh] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath: "polygon(0% 0%, 30% 0%, 100% 80%, 0% 80%)",
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="relative left-[95%] top-[15%] aspect-1155/678 w-[1000px] h-[54%] -translate-x-1/2 rotate-30 bg-linear-to-tr bg-primary/30 opacity-30"
        />
      </div>
    </section>
  );
}

export default page;
