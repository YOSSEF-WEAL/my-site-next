"use client";

import { useState } from "react";
import { BASE_URL } from "../_api/apisConfig";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

function ContactForm() {
  const t = useTranslations("Contact_Me_Page.form");

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const strapiData = {
      data: data,
    };

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strapiData),
    };

    try {
      const response = await fetch(`${BASE_URL}/api/contact-forms`, reqOptions);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || "An error occurred.");
      }

      setMessage("Form submitted successfully!");
      setTimeout(() => {
        redirect("/success");
      }, 0);
      event.target.reset();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-5 md-[49%] text-white">
      <p className="text-2xl font-bold">{t("title")}</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between gap-5"
      >
        <div className="w-full flex items-center justify-between flex-row flex-wrap gap-5">
          <input
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay={100}
            className="w-[48%] transition-all bg-white/15 border-2 border-white/80 block min-w-0 grow py-3 px-4 rounded-full text-base text-gray-200 placeholder:text-gray-300 outline-none focus:border-primary focus:bg-primary/15 sm:text-sm/6"
            type="text"
            placeholder={t("Name")}
            name="fullName"
            required
          />
          <input
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay={150}
            className="w-[48%] transition-all bg-white/15 border-2 border-white/80 block min-w-0 grow py-3 px-4 rounded-full text-base text-gray-200 placeholder:text-gray-300 outline-none focus:border-primary focus:bg-primary/15 sm:text-sm/6"
            type="email"
            placeholder={t("Mail")}
            name="mail"
            required
          />
          <input
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay={200}
            className="w-[48%] transition-all bg-white/15 border-2 border-white/80 block min-w-0 grow py-3 px-4 rounded-full text-base text-gray-200 placeholder:text-gray-300 outline-none focus:border-primary focus:bg-primary/15 sm:text-sm/6"
            type="text"
            placeholder={t("Number")}
            name="phoneNumber"
            required
          />
          <input
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay={250}
            className="w-[48%] transition-all bg-white/15 border-2 border-white/80 block min-w-0 grow py-3 px-4 rounded-full text-base text-gray-200 placeholder:text-gray-300 outline-none focus:border-primary focus:bg-primary/15 sm:text-sm/6"
            type="text"
            placeholder={t("Subject")}
            name="subject"
          />
        </div>
        <textarea
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay={300}
          name="massege"
          maxLength="5000"
          rows="10"
          placeholder={t("Massege")}
          required
          className="w-full min-h-[150px] transition-all bg-white/15 border-2 border-white/80 block min-w-0 grow py-3 px-4 rounded-4xl text-base text-gray-200 placeholder:text-gray-300 outline-none focus:border-primary focus:bg-primary/15 sm:text-sm/6"
        ></textarea>
        <div className="w-full flex items-center justify-center flex-row flex-wrap gap-5">
          <button
            type="submit"
            disabled={isLoading}
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-delay={310}
            className="px-4 py-2 w-full md:w-[48%] rounded-full bg-primary/50 border-2 border-primary text-base text-white transition-colors hover:bg-primary cursor-pointer"
          >
            {isLoading ? "Sending..." : t("Send_Button")}
          </button>
          <button
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-delay={310}
            type="reset"
            className="px-4 py-2 w-full md:w-[48%] rounded-full bg-white/15 border-2 border-wibg-white text-base text-white transition-colors hover:bg-red-500/90 cursor-pointer"
          >
            {t("Cancel_Button")}
          </button>
        </div>
        {/* Display success or error message */}
        {message && <p className="text-white mt-2">{message}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
