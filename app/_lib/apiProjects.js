import { BASE_URL } from "../_api/apisConfig";

export async function fetchAllCategories(pageSize = 20, lang = "en")
{
    const res = await fetch(
        `${BASE_URL}/api/projects-categories?pagination[pageSize]=${pageSize}&locale=${lang}&populate=*`,
        { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const { data } = await res.json();

    return data.map((cat) => ({
        id: cat.id,
        documentId: cat.documentId,
        name: cat.name,
        slug: cat.slug,
    }));
}

export async function fetchProjectsWithPagination(page = 1, perPage = 6, lang = "en")
{
    const res = await fetch(
        `${BASE_URL}/api/my-projects?locale=${lang}&pagination[pageSize]=${perPage}&pagination[page]=${page}&sort[0]=createdAt:desc&populate[FeaturedImage][fields][0]=url&populate[projects_categories][fields][0]=id&populate[projects_categories][fields][1]=documentId&populate[projects_categories][fields][2]=name&populate[projects_categories][fields][3]=slug&populate[projects_categories][fields][4]=createdAt&populate[projects_categories][fields][5]=updatedAt&populate[projects_categories][fields][6]=publishedAt`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const { data, meta } = await res.json();

    return {
        projects: data,
        totalPages: meta?.pagination?.pageCount || 1,
        hasMore: page < (meta?.pagination?.pageCount || 1),
    };
}

export async function fetchProjectsByCategory(categoryDocumentId, page = 1, perPage = 6, lang = "en")
{
    const res = await fetch(
        `${BASE_URL}/api/my-projects?locale=${lang}&filters[projects_categories][documentId][$eq]=${categoryDocumentId}&pagination[pageSize]=${perPage}&pagination[page]=${page}&sort[0]=createdAt:desc&populate[FeaturedImage][fields][0]=url&populate[projects_categories][fields][0]=id&populate[projects_categories][fields][1]=documentId&populate[projects_categories][fields][2]=name&populate[projects_categories][fields][3]=slug&populate[projects_categories][fields][4]=createdAt&populate[projects_categories][fields][5]=updatedAt&populate[projects_categories][fields][6]=publishedAt`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const { data, meta } = await res.json();

    return {
        projects: data,
        totalPages: meta?.pagination?.pageCount || 1,
        hasMore: page < (meta?.pagination?.pageCount || 1),
    };
}
