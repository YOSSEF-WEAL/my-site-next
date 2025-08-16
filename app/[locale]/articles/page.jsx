import ArticlesList from "@/app/_components/ArticlesList";
import { fetchArticleCategories, fetchArticles } from "@/app/_lib/apiArticles";

export default async function Page({ params: { locale }, searchParams }) {
  const categoryId = searchParams?.cat || "all";

  const [categories, { articles, hasMore }] = await Promise.all([
    fetchArticleCategories(locale),
    fetchArticles(1, 6, locale, categoryId),
  ]);

  return (
    <div className="text-white pt-25 md:pt-35 relative">
      <ArticlesList
        initialArticles={articles}
        hasMore={hasMore}
        categories={categories}
        initialCategory={categoryId}
        locale={locale}
      />
    </div>
  );
}
