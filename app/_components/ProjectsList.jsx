"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "../_ui/ProjectCard";
import {
  fetchProjectsWithPagination,
  fetchProjectsByCategory,
  fetchAllCategories,
} from "../_lib/apiProjects";
import { useTranslations } from "next-intl";

function ProjectsList({ initialProjects, totalPages, lang }) {
  const [projects, setProjects] = useState(initialProjects || []);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(page < totalPages);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const loader = useRef(null);
  const t = useTranslations("Projects_Page");

  // Load categories once
  useEffect(() => {
    (async () => {
      const cats = await fetchAllCategories(50, lang);
      setCategories(cats);
    })();
  }, [lang]);

  // Load more projects
  const loadMore = async () => {
    if (!hasMore) return;
    const nextPage = page + 1;
    let res;

    if (activeCategory === "all") {
      res = await fetchProjectsWithPagination(nextPage, 6, lang);
    } else {
      res = await fetchProjectsByCategory(activeCategory, nextPage, 6, lang);
    }

    setProjects((prev) => [...prev, ...res.projects]);
    setPage(nextPage);
    setHasMore(res.hasMore);
  };

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader, hasMore, page, activeCategory]);

  // Handle filter change
  const handleFilter = async (categoryId) => {
    setActiveCategory(categoryId);
    setPage(1);

    let res;
    if (categoryId === "all") {
      res = await fetchProjectsWithPagination(1, 6, lang);
    } else {
      res = await fetchProjectsByCategory(categoryId, 1, 6, lang);
    }

    setProjects(res.projects);
    setHasMore(res.hasMore);
  };

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 my-6 px-4">
        <button
          onClick={() => handleFilter("all")}
          className={`px-4 py-2 rounded-full  ${
            activeCategory === "all"
              ? "bg-primary text-white"
              : "bg-white/15 text-white cursor-pointer"
          }`}
        >
          {t("all")}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.documentId}
            onClick={() => handleFilter(cat.documentId)}
            className={`px-4 py-2 rounded-full  ${
              activeCategory === cat.documentId
                ? "bg-primary text-white"
                : "bg-white/15 text-white cursor-pointer"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="px-4 w-full flex flex-row flex-wrap items-center justify-center gap-5 mt-10">
        {projects && projects.length > 0
          ? projects.map((project) => (
              <div
                key={project.documentId}
                className="w-full md:w-[31%] sm:w-[48%] h-[350px]"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <ProjectCard projects={[project]} />
              </div>
            ))
          : "No projects found"}
      </div>

      {/* Loader */}
      {hasMore && (
        <div ref={loader} className="py-10 text-center text-white">
          Loading more projects...
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
