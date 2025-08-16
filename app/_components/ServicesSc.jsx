import SliderService from "../_sliders/SliderService";
import Heding from "../_ui/Heding";
import { useTranslations } from "next-intl";

function ServicesSc() {
  const t = useTranslations("Services_Page.Services_Sc");

  return (
    <section
      id="services"
      className=" relative mt-20 md:mt-2 md:min-w-full flex items-center justify-center gap-3 flex-col pb-10"
    >
      <Heding textWhite={t("Heding.white")} textPrimary={t("Heding.primry")} />
      <div className="absolute scale-[0.5] top-20 left-[70%] -z-10 blur-[300px] right-10 transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
          className=" left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-22 bg-linear-to-tr bg-primary/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <SliderService />
    </section>
  );
}

export default ServicesSc;
