import { useTranslations } from "next-intl";

import { FaCode, FaUserGraduate } from "react-icons/fa";
import { GiPolarStar } from "react-icons/gi";

function AboutAndApproach() {
  const t = useTranslations("About_Page");

  return (
    <div className="flex justify-between gap-5 items-start flex-col md:flex-row mt-8">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" flex items-start justify-center gap-2 flex-col w-full md:w-[50%]"
      >
        <div className=" space-y-3">
          <div className="flex items-center justify-start gap-2 w-fit flex-row border-b-2 border-white/50 pb-2">
            <FaCode size={30} className="text-primary" />
            <h1 className="text-3xl font-bold ">{t("About_Me.title")}</h1>
          </div>

          <p className="text-base">{t("About_Me.content_1")}</p>
          <p className="text-base">{t("About_Me.content_2")}</p>
          <p className="text-base">{t("About_Me.content_3")}</p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="w-full md:w-[50%] space-y-3 p-5 bg-bg-app rounded-3xl shadow-2xl shadow-primary/20 border-2 border-primary"
      >
        <div className="flex items-center justify-start gap-3 flex-row w-full">
          <FaUserGraduate size={25} className="fill-primary" />
          <h1 className="text-2xl font-bold ">{t("My_Approach.title")}</h1>
        </div>

        <div className="flex flex-row items-center justify-start gap-2">
          <GiPolarStar size={18} className="fill-primary" />
          <p>{t("My_Approach.approach_1")}</p>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <GiPolarStar size={18} className="fill-primary" />
          <p>{t("My_Approach.approach_2")}</p>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <GiPolarStar size={18} className="fill-primary" />

          <p>{t("My_Approach.approach_3")}</p>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <GiPolarStar size={18} className="fill-primary" />

          <p>{t("My_Approach.approach_4")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutAndApproach;
