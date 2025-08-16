import { getTranslations } from "next-intl/server";
import { BASE_URL } from "../_api/apisConfig";
import Error from "../_ui/Error";
import Heding from "../_ui/Heding";
import SliderTechStack from "../_sliders/SliderTechStack";

async function TechStackSc({ locale }) {
  const t = await getTranslations({
    locale,
    namespace: "Tech_Stack_Heading",
  });

  const res = await fetch(
    `${BASE_URL}/api/my-tech-stacks?populate[skillImage][fields][0]=url&pagination[pageSize]=50&pagination[page]=1&sort[0]=createdAt:desc`
  );
  const { data: techStack } = await res.json();

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return (
    <section id="tech-stack">
      <Heding textWhite={t("white")} textPrimary={t("primry")} />
      {!res.ok && <Error>An error occurred while loading My Tech Stack</Error>}
      <div className="flex flex-row flex-wrap items-center justify-center gap-3 px-3">
        <SliderTechStack
          techStack={Array.isArray(techStack) ? techStack : []}
        />
      </div>
    </section>
  );
}

export default TechStackSc;
