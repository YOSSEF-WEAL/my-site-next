import {
  fetchAllCategories,
  fetchProjectsWithPagination,
} from "@/app/_lib/apiProjects";
import ProjectsList from "@/app/_components/ProjectsList";

export default async function page({ params }) {
  const lang = params?.locale || "en";

  const [categories, { projects, totalPages }] = await Promise.all([
    fetchAllCategories(20, lang),
    fetchProjectsWithPagination(1, 6, lang),
  ]);

  return (
    <div className="text-white mt-5 pt-20 md:pt-28 relative">
      <ProjectsList
        initialProjects={projects}
        totalPages={totalPages}
        categories={categories}
        lang={lang}
      />
    </div>
  );
}
