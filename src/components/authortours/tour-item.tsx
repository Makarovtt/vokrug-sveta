import Image from "next/image";
import { Calendar, RussianRuble, SunMoon } from "lucide-react";
import { ITour } from "@/types/tours.interface";
import { convertPrice, textNights } from "@/lib/utils";
import Link from "next/link";
import useGetTypeTour from "@/hooks/useGetTypeTour";

export function TourItem({ dataItem }: { dataItem: ITour }) {
  const typeTour = useGetTypeTour(dataItem.type_tour);
  return (
    <div className="w-[400px] rounded-md shadow-md border border-gray-200 pb-5 group relative">
      <div className=" w-full h-[200px] relative overflow-hidden">
        <Link
          href={`/authortours/${dataItem.type_tour ? dataItem.type_tour : "alltours"}/${dataItem.id}`}
        >
          <Image
            src={dataItem.picture}
            alt={dataItem.title}
            fill
            className=" object-cover w-full h-full rounded-t-md group-hover:scale-110 transition"
          />
        </Link>
      </div>
      <div className="px-5 my-5 text-center text-xl font-semibold">
        <Link
          href={`/authortours/${dataItem.type_tour ? dataItem.type_tour : "alltours"}/${dataItem.id}`}
        >
          {dataItem.title}
        </Link>
      </div>
      <div className="flex items-end gap-5 justify-between px-4">
        <div className="flex flex-col gap-3 h-full">
          <div className="flex gap-2 items-center text-sm">
            <Calendar strokeWidth={1} size={20} />
            {dataItem.date}
          </div>
          <div className="flex gap-2 items-center text-sm">
            <SunMoon strokeWidth={1} size={20} />
            {textNights(Number(dataItem.nights))}
          </div>
        </div>
        <div>
          <div className="flex gap-2 margin-auto text-lg items-center font-semibold text-cyan-700">
            {convertPrice(Number(dataItem.price))}
          </div>
        </div>
      </div>

      {typeTour && dataItem.type_tour === "prazdnichnye" && (
        <div
          className="absolute top-1 rounded-l-lg right-0 p-4 bg-white 
            flex items-center justify-center text-sm font-semibold text-red-700"
        >
          {typeTour}
        </div>
      )}
    </div>
  );
}
