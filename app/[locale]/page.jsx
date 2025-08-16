import Hero from "../_components/Hero";
import LastArticlesSc from "../_components/LastArticlesSc";
import ProjectsSc from "../_components/ProjectsSc";

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <ProjectsSc locale={locale} />
      <LastArticlesSc locale={locale} />
    </>
  );
}
