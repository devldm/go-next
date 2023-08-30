"use client";

import { cutLongContent } from "@/utils/cutLongContent";
import { useState } from "react";
import CustomButton from "./CustomButton";

export default function ShowMoreWrapper({
  maxCharacterCount,
  text,
}: {
  maxCharacterCount: number;
  text: string;
}) {
  const [showMore, setShowMore] = useState(true);

  if (text.length > maxCharacterCount) {
    cutLongContent(maxCharacterCount, text);
  } else {
    return <p>{text}</p>;
  }

  return (
    <div>
      {showMore ? (
        <p>{cutLongContent(maxCharacterCount, text)}</p>
      ) : (
        <p>{text}</p>
      )}
      <CustomButton
        onClickFunc={() => setShowMore(!showMore)}
        text={showMore ? "Show More" : "Show Less"}
        classNames={`border border-gray-300 py-1 px-2 rounded-md text-md my-6`}
      />
    </div>
  );
}
