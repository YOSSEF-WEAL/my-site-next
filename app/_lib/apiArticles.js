import { BASE_URL } from "../_api/apisConfig";

export async function fetchArticleCategories(lang = "en")
{
    const url = `${BASE_URL}/api/blog-categories?locale=${lang}&pagination[pageSize]=50&fields[0]=name&fields[1]=slug&fields[2]=documentId`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);

    const { data } = await res.json();
    return data.map((cat) => ({
        id: cat.documentId,
        name: cat.name,
        slug: cat.slug,
    }));
}

export async function fetchArticles(
    page = 1,
    pageSize = 6,
    lang = "en",
    categoryId = "all"
)
{
    const params = new URLSearchParams({
        locale: lang,
        "pagination[pageSize]": String(pageSize),
        "pagination[page]": String(page),
        "sort[0]": "createdAt:desc",

        "fields[0]": "title",
        "fields[1]": "documentId",
        "fields[2]": "Excerpt",

        "populate[Featured_Image][fields][0]": "url",
        "populate[blog_categories][fields][0]": "documentId",
        "populate[blog_categories][fields][1]": "name",
        "populate[blog_categories][fields][2]": "slug",
    });

    if (categoryId !== "all")
    {
        params.append("filters[blog_categories][documentId][$eq]", categoryId);
    }

    const url = `${BASE_URL}/api/blogs?${params.toString()}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch articles: ${res.status}`);

    const { data, meta } = await res.json();

    return {
        articles: data,
        hasMore: page < (meta?.pagination?.pageCount ?? 1),
    };
}

export async function fetchLatestArticles(lang = "en", pageSize = 6)
{
    const params = new URLSearchParams({
        locale: lang,
        "pagination[pageSize]": String(pageSize),
        "pagination[page]": "1",
        "sort[0]": "createdAt:desc",
        "fields[0]": "title",
        "fields[1]": "documentId",
        "fields[2]": "Excerpt",
        "populate[Featured_Image][fields][0]": "url",
        "populate[blog_categories][fields][0]": "documentId",
        "populate[blog_categories][fields][1]": "name",
        "populate[blog_categories][fields][2]": "slug",
    });

    const url = `${BASE_URL}/api/blogs?${params.toString()}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch latest articles: ${res.status}`);

    const { data } = await res.json();
    return data;
}
