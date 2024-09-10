import Image from "next/image";
import ImgMarkerZagolovok from "@/public/images/marker-zagolovok.svg";
import { cn } from "@/lib/utils";

export function Zagolovok({
  title,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h1
      className={cn(
        "flex justify-start items-start gap-4 text-[#0F5B8E] text-2xl font-bold mb-10",
        className,
      )}
    >
      <Image src={ImgMarkerZagolovok} alt="" className="w-10" />
      <span className="hover:underline cursor-pointer">{title}</span>
    </h1>
  );
}
