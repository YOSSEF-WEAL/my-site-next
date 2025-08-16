import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { FaBehance } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { BASE_URL } from "../_api/apisConfig";
import Image from "next/image";

function ProjectCard({ projects }) {
  const t = useTranslations("Projects_Card");

  return (
    <>
      {Array.isArray(projects) &&
        projects.map((project) => (
          <div
            className="relative overflow-hidden w-full min-h-[350px] rounded-[20px]"
            key={project.id}
          >
            <Image
              className="w-full h-full object-cover -z-8 min-h-[350px]"
              src={`${BASE_URL}${project.FeaturedImage.url}`}
              alt={project.ProjectName}
              fill
            />
            <div className="absolute p-3 z-10 h-full top-0 right-0 w-full bg-gradient-to-b from-teal-950/0 to-teal-950/90 flex flex-col justify-end items-start text-white gap-2">
              <div className="flex flex-row gap-1 items-start">
                {project.projects_categories.map((cat, i) => (
                  <p
                    key={cat.id}
                    className="text-primary text-[16px] font-semibold"
                  >
                    {cat.ProjectName}
                  </p>
                ))}
              </div>
              <Link
                href={`/project/${project.id}`}
                className="text-2xl md:text-3xl font-bold transition-all hover:text-primary"
              >
                {project.ProjectName}
              </Link>
              <p className="text-1xl font-semibold text-gray-200 line-clamp-2">
                {project.ProjectDescription}
              </p>
              <div className="flex flex-row gap-3 items-start mb-2.5">
                {project.LiveDemoLink && (
                  <LinkIcon link={project.LiveDemoLink}>
                    <LuArrowUpRight size={28} />
                  </LinkIcon>
                )}
                {project.DesignLink && (
                  <LinkIcon link={project.DesignLink}>
                    <FaBehance size={28} />
                  </LinkIcon>
                )}
                {project.RepositorieLink && (
                  <LinkIcon link={project.RepositorieLink}>
                    <LuGithub size={28} />
                  </LinkIcon>
                )}

                <Link
                  href={`/project/${project.id}`}
                  className="flex items-center justify-center h-11 rounded-full transition-all hover:bg-primary bg-white/20 backdrop-blur-xs py-1 px-3"
                >
                  {t("Read_btn")}
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProjectCard;

function LinkIcon({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-11 rounded-full transition-all hover:bg-primary bg-white/20 backdrop-blur-xs py-1 px-3"
    >
      {children}
    </a>
  );
}
