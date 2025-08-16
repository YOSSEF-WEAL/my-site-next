"use client";

import { useState } from "react";
import { BASE_URL } from "../_api/apisConfig";

function TechTooltip({ imgUrl, name }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="transition-all hover:scale-[1.1] hover:bg-primary/20 hover:border-primary bg-white/15 border-2 border-white/50 flex items-center justify-center p-2.5 rounded-full">
        <img
          src={`${BASE_URL}${imgUrl}`}
          alt={name}
          loading="lazy"
          className="w-10 h-10 transition-all p-[2px] object-contain"
        />
      </div>
      <span
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-primary text-white text-xs whitespace-nowrap shadow-lg transition-all duration-200
          ${
            show
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
        style={{ zIndex: 50 }}
      >
        {name}
      </span>
    </div>
  );
}

export default TechTooltip;
