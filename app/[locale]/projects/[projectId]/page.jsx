import { BASE_URL } from "@/app/_api/apisConfig";
import ShowMoreText from "@/app/_ui/ShowMoreText";
import TechTooltip from "@/app/_ui/TechTooltip";
import { getTranslations } from "next-intl/server";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { FaBehance } from "react-icons/fa";
import SliderProject from "@/app/_sliders/SliderProject";

export async function generateMetadata({ params }) {
  const projectId = params.projectId;
  const locale = params.locale;

  const res = await fetch(
    `${BASE_URL}/api/my-projects/${projectId}?locale=${locale}&populate[FeaturedImage][fields][0]=url&populate[projects_categories][fields][0]=name`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const { data: project } = await res.json();

  return {
    title: `${project?.ProjectName} | Portfolio`,
    description:
      project?.ProjectDescription?.slice(0, 160) ||
      "Project details and information.",
    keywords: project?.projects_categories?.map((cat) => cat.name) || [],
    openGraph: {
      title: project?.ProjectName,
      description: project?.ProjectDescription?.slice(0, 200),
      url: `${BASE_URL}/projects/${projectId}`,
      type: "article",
      images: project?.FeaturedImage?.url
        ? [
            {
              url: project.FeaturedImage.url,
              width: 1200,
              height: 630,
              alt: project.ProjectName,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project?.ProjectName,
      description: project?.ProjectDescription?.slice(0, 200),
      images: [project?.FeaturedImage?.url],
    },
  };
}

async function page({ params }) {
  const projectId = params.projectId;
  const locale = params.locale;

  const t = await getTranslations({
    locale,
    namespace: "Project_Page",
  });

  const res = await fetch(
    `${BASE_URL}/api/my-projects/${projectId}?locale=${locale}&populate[FeaturedImage][fields][0]=url&populate[gallery][fields][0]=url&populate[my_tech_stacks][populate][skillImage][fields][0]=url&populate[projects_categories][fields][0]=name&populate[projects_categories][fields][1]=slug`
  );
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const { data: project } = await res.json();

  return (
    <div className="text-white pt-30 relative">
      <div className="flex items-start justify-center gap-5 flex-col-reverse md:flex-row">
        <div className="w-full md:w-[50%]">
          <SliderProject projectImags={project?.gallery} />
        </div>

        <div className="w-full px-5 md:w-[50%] flex items-start justify-start gap-3 flex-col">
          <div className="w-full flex justify-start items-center">
            {project.projects_categories.map((cat, i) => (
              <p
                key={cat.id || i}
                className="text-primary text-[16px] font-semibold"
              >
                {cat.name}
                {i < project.projects_categories.length - 1 && ","}
              </p>
            ))}
          </div>

          <p className="text-3xl md:text-5xl">{project?.ProjectName}</p>
          <ShowMoreText
            text={project.ProjectDescription}
            maxLength={200}
            showMoreText={t("showMore")}
            showLessText={t("showLess")}
          />

          <p className="text-white pb-2 py-2 border-b-3 text-start border-primary text-2xl w-fit font-semibold">
            {t("technologies")}
          </p>
          <div className="flex flex-row flex-wrap gap-3 items-end mb-2.5">
            {project.my_tech_stacks.map((tec, i) => (
              <TechTooltip
                key={i}
                imgUrl={tec.skillImage.url}
                name={tec.skillName}
              />
            ))}
          </div>

          <p className="text-white pb-2 py-2 border-b-3 text-start border-primary text-2xl w-fit font-semibold">
            {t("links")}
          </p>
          <div className="flex flex-row flex-wrap gap-3 items-start mb-2.5">
            {project?.LiveDemoLink && (
              <LinkIcon link={project?.LiveDemoLink}>
                <LuArrowUpRight size={28} />
                <p className="text-lg font-semibold">{t("live")}</p>
              </LinkIcon>
            )}
            {project?.DesignLink && (
              <LinkIcon link={project?.DesignLink}>
                <FaBehance size={28} />
                <p className="text-lg font-semibold">{t("behance")}</p>
              </LinkIcon>
            )}
            {project?.RepositorieLink && (
              <LinkIcon link={project?.RepositorieLink}>
                <LuGithub size={28} />
                <p className="text-lg font-semibold">{t("repo")}</p>
              </LinkIcon>
            )}
          </div>
        </div>
      </div>

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
          className="relative left-[80%] top-[40%] aspect-1155/678 w-[1000px] h-[54%] -translate-x-1/2 rotate-30 bg-linear-to-tr bg-primary/30 opacity-30"
        />
      </div>
    </div>
  );
}

export default page;

function LinkIcon({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 justify-center min-w-13 h-13 rounded-full bg-gradient-to-b bg-white/15 transition-all hover:scale-[1.1] hover:bg-primary/30 hover:border-primary border-3 border-white px-2.5 py-1"
    >
      {children}
    </a>
  );
}
