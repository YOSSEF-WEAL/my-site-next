import Link from "next/link";
import Heding from "../_ui/Heding";
import ProjectCard from "../_ui/ProjectCard";
import { BASE_URL } from "../_api/apisConfig";
import { getTranslations } from "next-intl/server";

async function ProjectsSc({ locale }) {
  const t = await getTranslations({
    locale,
    namespace: "Last_Projects_Heading",
  });

  const res = await fetch(
    `${BASE_URL}/api/my-projects?locale=${locale}&pagination[pageSize]=6&pagination[page]=1&sort[0]=createdAt:desc&populate[FeaturedImage][fields][0]=url&populate[projects_categories][fields][0]=id&populate[projects_categories][fields][1]=documentId&populate[projects_categories][fields][2]=name&populate[projects_categories][fields][3]=slug&populate[projects_categories][fields][4]=createdAt&populate[projects_categories][fields][5]=updatedAt&populate[projects_categories][fields][6]=publishedAt`
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const { data: LastProjects } = await res.json();

  return (
    <section className="relative mt-20">
      <Heding textWhite={t("white")} textPrimary={t("primry")} />
      {!res.ok && <Error>An error occurred while loading Last Projects</Error>}

      <div className="px-4 w-full flex flex-row flex-wrap items-center justify-center gap-5 mt-5">
        {LastProjects && LastProjects.length > 0
          ? LastProjects.map((project) => (
              <div
                key={project.id}
                className="w-full md:w-[31%] sm:w-[48%] h-[350px]"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <ProjectCard projects={[project]} />
              </div>
            ))
          : ""}
      </div>
      <div className="m-8 flex items-center justify-center">
        <Link
          href="/projects"
          className="px-8 py-2 rounded-full bg-primary/20 border-2 border-primary md:text-2xl text-1xl text-white transition-colors hover:bg-primary"
        >
          {t("Last_Projects_AC")}
        </Link>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[20%] left-[0%] -z-10 w-full h-screen transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath: "polygon(0% 0%, 30% 0%, 100% 80%, 0% 80%)",
          }}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="relative left-[95%] top-[0%] aspect-1155/678 w-[1000px] h-[54%] -translate-x-1/2 rotate-30 bg-linear-to-tr bg-primary/30 opacity-30"
        />
      </div>
    </section>
  );
}

export default ProjectsSc;
