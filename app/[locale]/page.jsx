import Hero from "../_components/Hero";
import LastArticlesSc from "../_components/LastArticlesSc";
import ProjectsSc from "../_components/ProjectsSc";
import ServicesSc from "../_components/ServicesSc";
import TechStackSc from "../_components/TechStackSc";
import ActionButtons from "../_ui/ActionButtons";

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <ProjectsSc locale={locale} />
      <LastArticlesSc locale={locale} />
      <TechStackSc locale={locale} />
      <div className="w-full overflow-hidden md:overflow-visible">
        <ServicesSc locale={locale} />
      </div>
      <div className="flex w-full items-center justify-center mt-5 pt-5 border-t-2 border-white/20">
        <ActionButtons />
      </div>
    </>
  );
}
