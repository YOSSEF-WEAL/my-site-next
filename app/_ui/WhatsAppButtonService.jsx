import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButtonService({ textMessage }) {
  const t = useTranslations("Services_Page.cards_Services");

  const phoneNumber = "201212476207";
  let message = `${textMessage}\n`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#128c7e] rounded-full cursor-pointer"
    >
      <FaWhatsapp size={22} />
      <span>{t("text_Button")}</span>
    </a>
  );
}

export default WhatsAppButtonService;
