import { cn } from "@/lib/utils";
import { BadgeRussianRuble, CalendarCheck2, Clock } from "lucide-react";
import { TransitSectionItemItem } from "./TransitSectionItemItem";
import { ITrans } from "@/types/transit.interface";
import { FC } from "react";

interface Iprops {
  item: ITrans;
  del: boolean;
}

export const TransitSectionItem: FC<Iprops> = ({ item, del }) => {
  const newRoute = item.route?.split("|");
  return (
    <tr
      key={item.id}
      className={cn(
        "table_transit mb-4 hover:bg-slate-200 transition mx-0 py-1",
        del ? "bg-slate-100" : "bg-slate-50",
      )}
    >
      <td className="text-center pt-2">{item.id}</td>
      <td className="flex items-start gap-2">
        <CalendarCheck2 className="mt-2 text-gray-400 w-4 500:w-5" />
        <div>
          {item.departure?.split("|").map((item) => {
            return (
              <div key={item} className="!m-0 !p-0">
                {item.trim()}
              </div>
            );
          })}
        </div>
      </td>
      <td>
        {newRoute.map((i, index) => {
          return (
            <TransitSectionItemItem
              key={i}
              i={i.trim()}
              index={index}
              item={item}
            />
          );
        })}
        {/* {item.route} */}
      </td>
      <td className="flex items-start gap-2">
        <BadgeRussianRuble className="mt-2 text-gray-400 w-4 500:w-8" />
        <div>
          {item.price?.split("|").map((item, index) => {
            return (
              <div key={index} className="!m-0 !p-0">
                {item.trim()}
              </div>
            );
          })}
        </div>
      </td>
      <td className="flex items-start gap-2">
        <Clock className="mt-2 text-gray-400 w-4 500:w-5" />
        <div>
          {item.time_dep?.split("|").map((item, index) => {
            return (
              <div key={index} className="!m-0 !p-0">
                {item.trim()}
              </div>
            );
          })}
        </div>
      </td>
    </tr>
  );
};
