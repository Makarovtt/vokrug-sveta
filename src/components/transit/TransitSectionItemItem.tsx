import { Bus, ChevronRight, MoveRight } from "lucide-react";
import { ITrans } from "@/types/transit.interface";
import { FC } from "react";

interface Iprops {
  item: ITrans;
  i: string;
  index: number;
}

export const TransitSectionItemItem: FC<Iprops> = ({ i, index, item }) => {
  return (
    <>
      <span
        key={index}
        className=" text-gray-600 my-1 text-xs 500:text-sm 1100:text-base"
      >
        {index === 0 ? (
          <>
            <b className="flex items-center gap-2 text-gray-700 font-semibold">
              <Bus size={20} className="text-gray-400 w-4 500:w-5" /> {i}
            </b>
            {item.route.split("|").length <= 2 ? (
              <span className="block ml-7 font-bold text-lg mb-2">
                <MoveRight />
              </span>
            ) : null}
          </>
        ) : index === item.route.split("|").length - 1 ? (
          <b className="items-center gap-2 ml-7 inline-block">{i}</b>
        ) : (
          <span className="flex items-center ml-6">
            <ChevronRight size={15} className="text-gray-400" />
            {i}
          </span>
        )}
      </span>
    </>
  );
};
