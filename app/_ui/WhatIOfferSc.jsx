import { useTranslations } from "next-intl";
import { SiOnlyoffice } from "react-icons/si";
import { TbNorthStar } from "react-icons/tb";

function WhatIOfferSc() {
  const t = useTranslations("About_Page.My_Offer");

  return (
    <>
      <div className="flex items-center justify-center gap-2 mt-12 w-full mb-3 flex-row border-b-2 border-white/20 pb-2">
        <SiOnlyoffice size={30} className="text-primary" />
        <h1 className="text-3xl font-bold ">{t("title")}</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
        className="flex items-start justify-between flex-row flex-wrap gap-3 md:gap-5"
      >
        <div className="w-full md:w-[32%] p-2.5 flex flex-col gap-2 items-center justify-center border-2 border-white/20 rounded-3xl bg-white/15">
          <div
            className={`bg-cyan-500/25 rounded-full p-2 flex items-center justify-center w-20 h-15`}
          >
            <TbNorthStar size={40} className={`text-cyan-500`} />
          </div>
          <div className="flex items-center justify-center gap-0 mt-2 flex-col">
            <h3 className="text-2xl w-full text-center">
              {t("offer_1.title")}
            </h3>
            <p className="text-center">{t("offer_1.description")}</p>
          </div>
        </div>
        <div className="w-full md:w-[32%] p-2.5 flex flex-col gap-2 items-center justify-center border-2 border-white/20 rounded-3xl bg-white/15">
          <div
            className={`bg-cyan-500/25 rounded-full p-2 flex items-center justify-center w-20 h-15`}
          >
            <TbNorthStar size={40} className={`text-cyan-500`} />
          </div>
          <div className="flex items-center justify-center gap-0 mt-2 flex-col">
            <h3 className="text-2xl w-full text-center">
              {t("offer_2.title")}
            </h3>
            <p className="text-center">{t("offer_2.description")}</p>
          </div>
        </div>
        <div className="w-full md:w-[32%] p-2.5 flex flex-col gap-2 items-center justify-center border-2 border-white/20 rounded-3xl bg-white/15">
          <div
            className={`bg-cyan-500/25 rounded-full p-2 flex items-center justify-center w-20 h-15`}
          >
            <TbNorthStar size={40} className={`text-cyan-500`} />
          </div>
          <div className="flex items-center justify-center gap-0 mt-2 flex-col">
            <h3 className="text-2xl w-full text-center">
              {t("offer_3.title")}
            </h3>
            <p className="text-center">{t("offer_3.description")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatIOfferSc;
