import { BASE_URL } from "@/app/_api/apisConfig";
import ActionButtons from "@/app/_ui/ActionButtons";
import Heding from "@/app/_ui/Heding";
import ServiceCard from "@/app/_ui/ServiceCard";
import { getTranslations } from "next-intl/server";
export const metadata = {
  title: "Services",
  description:
    "Discover the web development services offered by Yossef Weal, including React, Next.js, and full-stack solutions tailored to your needs.",
  keywords: [
    "Yossef Weal",
    "Web Developer",
    "React",
    "Next.js",
    "Full Stack",
    "Web Development Services",
    "Portfolio",
  ],
  authors: [
    { name: "Yossef Weal", url: "https://portfolio-yossef-weal.netlify.app" },
  ],
  openGraph: {
    title: "Web Development Services by Yossef Weal",
    description:
      "Explore Yossef Weal’s professional services in web development, from React and Next.js projects to full-stack solutions.",
    url: "https://portfolio-yossef-weal.netlify.app/services",
    siteName: "Yossef Weal Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://portfolio-yossef-weal.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Services by Yossef Weal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services by Yossef Weal",
    description:
      "Discover the range of web development services provided by Yossef Weal, from React and Next.js to full-stack solutions.",
    images: ["https://yossef.3a-d.com/uploads/yossef_weal_services.jpg"],
    site: "@YossefWeal",
    creator: "@YossefWeal",
  },
};

async function page({ params }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Services_Page",
  });

  const res = await fetch(
    `${BASE_URL}/api/services?populate[my_tech_stacks][fields][0]=skillName&populate[my_tech_stacks][populate][skillImage][fields][0]=url&pagination[pageSize]=20&pagination[page]=1&sort[0]=createdAt:asc&locale=${locale}`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const { data: service } = await res.json();
  return (
    <div className="mt-31">
      <Heding textWhite={t("Heding.white")} textPrimary={t("Heding.primry")} />
      <div
        className={`w-full flex items-start justify-center flex-row flex-wrap gap-4 px-4.5 pd:mx-0 `}
      >
        {!res.ok && <Error>An error occurred while loading services.</Error>}
        {service?.map((service, i) => (
          <ServiceCard locale={locale} index={i} key={i} service={service} />
        ))}
      </div>

      <div className="flex w-full items-center justify-center mt-8 pt-5 border-t-2 border-white/20 ">
        <ActionButtons />
      </div>
    </div>
  );
}

export default page;
