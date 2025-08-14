import Error from "../_ui/Error";
import { BASE_URL } from "../_api/apisConfig";
import Link from "next/link";
import { BiSolidCube } from "react-icons/bi";
import { LuFileSpreadsheet } from "react-icons/lu";

async function Hero({ params }) {
  const res = await fetch(`${BASE_URL}/api/hero-sc?locale=${params}`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const { data: heroSc } = await res.json();

  return (
    <div className="text-white pt-35 md:pt-45 ">
      <div className="relative isolate px-6 lg:px-8 flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath: "polygon(0% 0%, 30% 0%, 100% 80%, 0% 80%)",
            }}
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-22 bg-linear-to-tr bg-primary/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        {!res.ok ? (
          <Error>There was an error loading Hero Section</Error>
        ) : (
          <div className="mx-auto max-h-[80vh] flex items-center justify-center flex-col ">
            <div className="md:mb-11 mb-3 sm:justify-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="relative rounded-full px-3 py-1 text-sm/6 text-gray-100 transition-colors ring-2 ring-primary/60 hover:ring-primary"
              >
                <Link
                  href="/contact"
                  className="text-white flex flex-row items-center justify-center gap-2"
                >
                  <BiSolidCube className="text-primary text-2xl " />
                  {heroSc.callToAction}
                </Link>
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-4 mt-3 md:mt-0">
              <h1
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="text-4xl md:text-5xl text-primary font-semibold tracking-tight text-balance sm:text-7xl"
              >
                {heroSc.title}
              </h1>{" "}
              <h1
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="text-3xl md:text-5xl font-semibold tracking-tight text-balance text-gray-50 sm:text-7xl"
              >
                {heroSc.subtitle}
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="text-base md:text-lg font-medium text-pretty text-gray-100 sm:text-xl/8"
              >
                {heroSc.description}
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="flex items-center justify-center gap-x-6"
              >
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-full bg-primary/50 border-2 border-primary text-base text-white transition-colors hover:bg-primary"
                >
                  {heroSc.buttonOne}
                </Link>
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1_ur1Kb8FjiFQ4ODpOwoDscLrmT3n284t?usp=sharing"
                  className=" w-fit rounded-full flex items-center justify-center gap-2 transition-colors hover:text-primary"
                >
                  <LuFileSpreadsheet size={20} />
                  {heroSc.buttonTow}
                </a>
              </div>
            </div>
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-90 left-[0%] -z-10 w-full h-screen transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath: "polygon(0% 0%, 30% 0%, 100% 80%, 0% 80%)",
            }}
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="600"
            className="relative left-[95%] top-[54%] aspect-1155/678 w-[1000px] h-[54%] -translate-x-1/2 rotate-30 bg-linear-to-tr bg-primary/30 opacity-30"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
