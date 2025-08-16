import { useTranslations } from "next-intl";
import Link from "next/link";
import { GrContactInfo } from "react-icons/gr";
import { LuFileSpreadsheet } from "react-icons/lu";

function ActionButtons() {
  const t = useTranslations("Action_Buttons");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 ">
      <a
        target="_blank"
        href="https://drive.google.com/drive/folders/1_ur1Kb8FjiFQ4ODpOwoDscLrmT3n284t?usp=sharing"
        className="px-3 py-1.5 w-fit rounded-full bg-primary/50 border-2 border-primary text-base text-white transition-colors hover:bg-primary flex items-center justify-center gap-2"
      >
        <LuFileSpreadsheet size={20} />
        {t("cv")}
      </a>
      <Link
        href="/contact"
        className="px-3 py-1.5 w-fit rounded-full bg-primary/50 border-2 border-primary text-base text-white transition-colors hover:bg-primary flex items-center justify-center gap-2"
      >
        <GrContactInfo size={20} />
        {t("contact")}
      </Link>
    </div>
  );
}

export default ActionButtons;
