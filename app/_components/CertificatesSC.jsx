import { useTranslations } from "next-intl";
import { PiCertificateBold } from "react-icons/pi";
import CertificatesList from "./CertificatesList";

function CertificatesSC({locale}) {
  const t = useTranslations("About_Page.Certificates");

  return (
    <div className="flex items-center justify-center gap-2 mt-12 w-full mb-3 flex-col pb-2">
      <div className="flex items-center justify-center gap-2 mt-12 w-fit mb-3 flex-row border-b-2 border-white/20 pb-2">
        <PiCertificateBold size={30} className="text-primary" />
        <h1 className="text-3xl font-bold ">{t("title")}</h1>
      </div>
      <CertificatesList locale={locale} />
    </div>
  );
}

export default CertificatesSC;
