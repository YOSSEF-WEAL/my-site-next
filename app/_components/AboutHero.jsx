import Image from "next/image";
import { BASE_URL } from "../_api/apisConfig";

async function AboutHero({ locale }) {
  const res = await fetch(
    `${BASE_URL}/api/about-hero?locale=${locale}&populate[myImage][fields][0]=url`
  );

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  const { data: aboutHero } = await res.json();

  return (
    <>
      {!res.ok ? (
        <Error>{t("error")}</Error>
      ) : aboutHero ? (
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="rounded-full overflow-hidden w-50 h-50 border-3 border-white transition-all hover:border-primary mb-2"
          >
            <Image
              fill
              className="w-full h-full transition-all hover:scale-[1.1]"
              src={`${BASE_URL}${aboutHero.myImage.url}` || "/yossef-weal.jpg"}
              alt={aboutHero.name || "yossef weal profile"}
            />
          </div>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            {aboutHero.title || "Hi, I'm Yossef Weal"}
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-1xl md:text-[22px]"
          >
            {aboutHero.description ||
              "I'm a Front-End Web Developer and UI / UX Designer with over two years of experience building web applications using modern technologies like Next.js, React, and Tailwind CSS. I focus on creating efficient front-end experiences and smooth backend integration."}
          </p>
        </div>
      ) : null}
    </>
  );
}

export default AboutHero;
