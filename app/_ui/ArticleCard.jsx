import Link from "next/link";
import { useTranslations } from "next-intl";
import { BASE_URL } from "../_api/apisConfig";
import { useAppLocale } from "../_providers/LocaleProvider";
import Image from "next/image";

function ArticleCard({ article }) {
  const t = useTranslations("Projects_Card");
  const locale = useAppLocale();

  return (
    <article
      className={`${
        locale === "ar" ? "text-right" : ""
      } relative flex flex-col w-full p-2 rounded-4xl bg-white/15 border-2 border-white text-white`}
    >
      <Link
        href={`articles/${article.documentId}`}
        className="relative overflow-hidden w-full h-60 z-8"
      >
        <Image
          fill
          src={`${BASE_URL}${article.Featured_Image?.url}`}
          alt={article.title}
          className="w-full h-full rounded-3xl object-cover transition-all hover:grayscale-50"
        />
      </Link>
      <div className="flex flex-col p-1.5 gap-2 ">
        <div className="flex items-center w-full absolute top-2.5 z-10">
          {article.blog_categories?.map((cat, i) => (
            <p
              className="text-[12px] bg-primary px-4 font-semibold py-2 w-fit rounded-full"
              key={i}
            >
              {cat.name}
            </p>
          ))}
        </div>
        <Link
          href={`articles/${article.documentId}`}
          className="text-[18px] font-semibold line-clamp-2 transition-all hover:text-primary"
        >
          {article.title}
        </Link>
        <p className="text-base line-clamp-3 text-gray-200">
          {article.Excerpt}
        </p>
        <Link
          href={`articles/${article.documentId}`}
          className="text-[16px] w-full text-center bg-primary/50 px-2 py-1 rounded-full transition-all hover:bg-primary mt-1"
        >
          {t("Read_btn")}
        </Link>
      </div>
    </article>
  );
}

export default ArticleCard;
