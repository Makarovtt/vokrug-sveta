import Image from "next/image";
import ImgMarkerZagolovok from "@/public/images/marker-zagolovok.svg";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Iprops {
  title: string;
  className?: string;
  tour?: boolean;
}

export const Zagolovok: FC<Iprops> = ({
  title,
  className = "",
  tour = false,
}) => {
  return (
    <h1
      className={cn(
        "flex justify-start items-start gap-4 text-[#0F5B8E] text-2xl font-bold mb-10",
        className,
      )}
    >
      <Image src={ImgMarkerZagolovok} alt="" className="w-10" />
      {tour && <span className="text-default-500 text-2xl">Тур: </span>}
      <span className="hover:underline cursor-pointer">{title}</span>
    </h1>
  );
};
