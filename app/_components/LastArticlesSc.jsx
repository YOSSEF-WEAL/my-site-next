import Heding from "../_ui/Heding";
import Error from "../_ui/Error";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BASE_URL } from "../_api/apisConfig";
import SliderLatestArticles from "../_sliders/SliderLatestArticles";

async function LastArticlesSc({ locale }) {
  const t = await getTranslations({
    locale,
    namespace: "LastArticlesSc",
  });

  const query = new URLSearchParams({
    locale,
    "pagination[pageSize]": 6,
    "pagination[page]": 1,
    "sort[0]": "createdAt:desc",

    "fields[0]": "title",
    "fields[1]": "documentId",
    "fields[2]": "Excerpt",

    "populate[Featured_Image][fields][0]": "url",

    "populate[blog_categories][fields][0]": "documentId",
    "populate[blog_categories][fields][1]": "name",
    "populate[blog_categories][fields][2]": "slug",
  }).toString();

  const response = await fetch(`${BASE_URL}/api/blogs?${query}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data: lastArticles } = await response.json();

  return (
    <section className="relative mt-20">
      <Heding
        textWhite={t("Heading.white", {
          returnObjects: true,
        })}
        textPrimary={t("Heading.primry", {
          returnObjects: true,
        })}
      />
      {!response.ok && (
        <Error>An error occurred while loading Last Articles</Error>
      )}

      <div className="flex flex-wrap flex-row justify-center items-start gap-2.5 px-2.5">
        <SliderLatestArticles locale={locale} article={lastArticles} />
      </div>

      <div className="m-8 flex items-center justify-center">
        <Link
          href="/articles"
          className="px-8 py-2 rounded-full bg-primary/20 border-2 border-primary md:text-2xl text-1xl text-white transition-colors hover:bg-primary"
        >
          {t("Reed_All")}
        </Link>
      </div>
    </section>
  );
}

export default LastArticlesSc;
