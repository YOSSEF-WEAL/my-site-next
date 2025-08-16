"use client";

import { useState } from "react";
import PopupCertificate from "./PopupCertificate";
import { BASE_URL } from "../_api/apisConfig";
import Image from "next/image";

function CertificateCard({ certificate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="1000"
        key={certificate.documentId}
        className="w-full md:w-[32%] p-2.5 bg-white/15 border-2 border-white/50 rounded-2xl transition-all cursor-pointer hover:bg-primary/30 hover:border-primary"
      >
        <Image
          src={`${BASE_URL}${certificate.certificateImage?.url}`}
          alt={certificate.courseName}
          width={600}
          height={400}
          className="rounded-[10px] object-cover"
        />
      </div>
      <PopupCertificate
        certificate={certificate}
        setOpen={setOpen}
        open={open}
      />
    </>
  );
}

export default CertificateCard;
