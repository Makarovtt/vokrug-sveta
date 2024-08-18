import Image from "next/image";
import { RatingStars } from "./rating-stars";
import ImgTurkey from "@/public/images/tours/turkey.jpg";

interface IDataTour {
  id: number;
  image: string;
  stars?: number;
  hotel?: string;
  country?: string;
  city?: string;
  date?: string;
  nights?: number;
  departureCity?: string;
  oldPrice?: number;
  price?: number;
}

export function TourCatalogItem({ dataTour }: { dataTour: IDataTour }) {
  return (
    <div className="border border-myborder p-3 flex flex-col group hover:shadow-md">
      <div className="flex justify-center items-center w-[250px] h-[150px] relative overflow-hidden">
        <Image
          src={dataTour.image}
          fill
          className="object-cover w-full group-hover:scale-110 transition"
          alt=""
        />
      </div>
      <div>
        <RatingStars stars={dataTour?.stars} />
      </div>
      <div className="text-base font-bold mt-2 uppercase">
        {dataTour?.hotel}
      </div>
      <div className="font-light">
        {dataTour?.country}. {dataTour?.city}
      </div>
      <div className="my-4">
        <div>
          {dataTour?.date}, {dataTour?.nights} ночей
        </div>
        <div>из {dataTour?.departureCity}</div>
      </div>
      <div className="flex justify-between items-end mt-auto">
        <div className="text-base text-gray-600">{dataTour?.oldPrice} Р</div>
        <div className="text-2xl text-[#ff0000] font-semibold">
          {dataTour?.price} Р
        </div>
      </div>
    </div>
  );
}
