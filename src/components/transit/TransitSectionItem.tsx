import { cn } from "@/lib/utils";
import {
  BadgeRussianRuble,
  Bus,
  CalendarCheck2,
  ChevronRight,
  Clock,
} from "lucide-react";
import { ITransit } from "./transit.interface";
import { TransitSectionItemItem } from "./TransitSectionItemItem";

export const TransitSectionItem = ({
  item,
  del,
}: {
  item: ITransit;
  del: boolean;
}) => {
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
          {item.departure?.map((item, index) => {
            return (
              <div key={index} className="!m-0 !p-0">
                {item}
              </div>
            );
          })}
        </div>
      </td>
      <td>
        {item.route?.map((i, index) => {
          return (
            <TransitSectionItemItem
              key={index}
              i={i}
              index={index}
              item={item}
            />
          );
        })}
      </td>
      <td className="flex items-start gap-2">
        <BadgeRussianRuble className="mt-2 text-gray-400 w-4 500:w-5" />
        <div>
          {item.price?.map((item, index) => {
            return (
              <div key={index} className="!m-0 !p-0">
                {item}
              </div>
            );
          })}
        </div>
      </td>
      <td className="flex items-start gap-2">
        <Clock className="mt-2 text-gray-400 w-4 500:w-5" />
        <div>
          {item.time?.map((item, index) => {
            return (
              <div key={index} className="!m-0 !p-0">
                {item}
              </div>
            );
          })}
        </div>
      </td>
    </tr>
  );
};
