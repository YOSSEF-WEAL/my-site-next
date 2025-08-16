import { getTranslations } from "next-intl/server";
import { BASE_URL } from "../_api/apisConfig";
import Error from "./Error";

async function FollowMe({ locale }) {
  const t = await getTranslations({
    locale,
    namespace: "Contact_Me_Page",
  });

  const res = await fetch(
    `${BASE_URL}/api/my-contacts?locale=${locale}&populate[contactImage][fields][0]=url&pagination[pageSize]=50&pagination[page]=1&sort[0]=createdAt:desc`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const { data: contact } = await res.json();

  return (
    <div className="w-full flex flex-col items-start gap-5 md-[49%] text-white">
      <p className="text-2xl font-bold">{t("Follow_Me")}</p>

      <div className="w-full flex items-center justify-start flex-row flex-wrap gap-5">
        {!res.ok && <Error>An error occurred while loading My Contact</Error>}

        {contact.map((contact, i) => (
          <a
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay={50 * i}
            href={contact.contactUrl}
            target={contact.notBlankTarget === true ? `_parent` : "_blank"}
            key={i}
            className="w-[46%] md:w-[22%] flex flex-col items-center gap-3 bg-white/15 p-5 rounded-xl border-3 border-white/60 transition-colors hover:bg-primary/30 hover:border-primary"
          >
            <img
              src={`${BASE_URL}${contact.contactImage.url}`}
              alt={contact.contactName}
              className="w-12 transition-all hover:scale-[1.1]"
            />
            <p className="text-2xl">{contact.contactName}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FollowMe;
