"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useAppLocale } from "../_providers/LocaleProvider";
import { BASE_URL } from "../_api/apisConfig";
import Image from "next/image";

function PopupCertificate({ open, setOpen, certificate }) {
  const locale = useAppLocale();

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-bg-body/80 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl shadow-bg-body transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col items-start justify-start gap-2">
                  <Image
                    src={`${BASE_URL}${certificate.certificateImage?.url}`}
                    alt={certificate.courseName}
                    width={600}
                    height={400}
                    className="rounded-[10px] object-cover"
                  />
                  <h4
                    className={`text-[20px] md:text-2xl font-bold text-gray-900 ${
                      locale === "ar" ? "text-right" : ""
                    }`}
                  >
                    {certificate.courseName}
                  </h4>
                  <p
                    className={`text-[14px] md:text-base text-gray-800 ${
                      locale === "ar" ? "text-right" : ""
                    }`}
                  >
                    {certificate.courseDescription}
                  </p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default PopupCertificate;
