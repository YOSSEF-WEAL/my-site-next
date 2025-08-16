"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ArticleCard from "../_ui/ArticleCard";
import { fetchArticles } from "../_lib/apiArticles";

export default function ArticlesList({
  initialArticles = [],
  hasMore = false,
  categories = [],
  initialCategory = "all",
  locale,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [articles, setArticles] = useState(initialArticles);
  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(hasMore);

  const observerRef = useRef(null);

  function handleTab(catId) {
    const params = new URLSearchParams(searchParams.toString());
    if (catId === "all") {
      params.delete("cat");
    } else {
      params.set("cat", catId);
    }
    router.push(`?${params.toString()}`);
    setCategory(catId);
    setPage(1);
    setArticles([]);
  }

  useEffect(() => {
    async function loadCategoryArticles() {
      try {
        const { articles: newArticles, hasMore: more } = await fetchArticles(
          1,
          6,
          locale,
          category
        );
        setArticles(newArticles);
        setHasNextPage(more);
        setPage(1);
      } catch (err) {
        console.error("Error loading category articles:", err);
      }
    }
    loadCategoryArticles();
  }, [category, locale]);

  const lastElementRef = useCallback(
    (node) => {
      if (loadingMore) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !loadingMore) {
          loadMore();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loadingMore, hasNextPage]
  );

  async function loadMore() {
    setLoadingMore(true);
    const nextPage = page + 1;
    try {
      const { articles: newArticles, hasMore: more } = await fetchArticles(
        nextPage,
        6,
        locale,
        category
      );
      setArticles((prev) => [...prev, ...newArticles]);
      setHasNextPage(more);
      setPage(nextPage);
    } catch (err) {
      console.error("Error loading more articles:", err);
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <>
      <div
        className="flex items-start md:items-center justify-center gap-5 flex-col md:flex-row p-5 rounded-3xl md:rounded-full mx-2 md:mx-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(74, 212, 147, 0) 0%, #007374 100%)",
        }}
      >
        <p className="text-2xl font-bold">Filter</p>
        <ul className="flex overflow-y-auto w-full md:w-fit items-center gap-3 flex-row">
          <li>
            <button
              onClick={() => handleTab("all")}
              className={`text-base font-bold rounded-full px-4 py-2 transition-all hover:bg-primary cursor-pointer ${
                category === "all" ? "bg-primary" : "bg-white/20"
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => handleTab(cat.id)}
                className={`text-base whitespace-nowrap font-bold rounded-full px-4 py-2 transition-all hover:bg-primary cursor-pointer ${
                  category === cat.id ? "bg-primary" : "bg-white/20"
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-5 justify-center mt-10">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={`${article.id ?? article.documentId ?? index}-${index}`}
              ref={index === articles.length - 1 ? lastElementRef : null}
              className="w-full md:w-[31%] sm:w-[48%]"
            >
              <ArticleCard article={article} />
            </div>
          ))
        ) : (
          <p className="text-gray-400">No articles found</p>
        )}
      </div>

      {loadingMore && (
        <div className="flex justify-center mt-10">
          <p>Loading...</p>
        </div>
      )}

      {!hasNextPage && articles.length > 0 && (
        <div className="text-center mt-10 text-gray-400">
          <p>All articles displayed</p>
        </div>
      )}
    </>
  );
}
