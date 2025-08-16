"use client";

import { useState } from "react";

export default function ShowMoreText({
  text = "",
  maxLength = 200,
  showMoreText,
  showLessText,
}) {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;
  const isLong = text.length > maxLength;
  const displayText =
    expanded || !isLong ? text : text.slice(0, maxLength) + "...";
  return (
    <div>
      <p className="text-base content-preview {expanded ? 'expanded' : ''}">
        {displayText}
      </p>
      {isLong && (
        <button
          className="read-more-btn btn mt-2 px-3 py-1 bg-primary/50 transition-colors hover:bg-primary rounded-full cursor-pointer w-full"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? showLessText : showMoreText}
        </button>
      )}
    </div>
  );
}
