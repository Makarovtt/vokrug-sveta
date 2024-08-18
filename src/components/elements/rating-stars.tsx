import React from "react";
import Image from "next/image";
import ImgStarRating from "@/public/images/tours/icon-star-rating.svg";
import { cn } from "@/lib/utils";

type PropTypes = {
  stars?: number;
  className?: string | React.HTMLAttributes<HTMLDivElement>;
};

export function RatingStars({ stars, className }: PropTypes) {
  const arr = [];
  if (stars) {
    for (let i = 0; i < stars; i++) {
      arr.push(i);
    }
  }
  return (
    <div
      className={cn(
        "flex justify-start items-center gap-1 mb-2 mt-4",
        className,
      )}
    >
      {arr.map((i: number) => {
        return <Image src={ImgStarRating} alt="" key={i} />;
      })}
    </div>
  );
}
