import { cn } from "@/lib/utils";
import { TRANSIT } from "../data/data-transit";
import { ITransit } from "./transit.interface";
import {
  BadgeRussianRuble,
  Bus,
  CalendarCheck2,
  ChevronRight,
  Clock,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";
import { Zagolovok } from "../elements/zagolovok";

export const TransitSection = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok
        title="Проезд автобусом на Черное Море из Астрахани!"
        className="mt-6 ml-3"
      />
      <div className="my-20 border border-slate-300 rounded-md w-full shadow pt-0 pb-3">
        <div
          className="shadow sticky top-0 border-b border-b-slate-200
                         bg-white rounded-tl-md rounded-tr-md mb-8 "
        >
          <div className="table_transit mx-8 pb-2 pt-8 text-gray-500">
            <div>№</div>
            <div>Дни выезда</div>
            <div>Маршрут</div>
            <div>Стоимость</div>
            <div>Время выезда</div>
          </div>
        </div>

        {TRANSIT &&
          TRANSIT.map((item: ITransit) => {
            let del = true;
            if (item.id % 2 === 0) del = false;
            return (
              <div
                key={item.id}
                className={cn(
                  "table_transit mb-4 rounded-md hover:bg-slate-200 transition mx-8",
                  del ? "bg-slate-100" : "bg-slate-50",
                )}
              >
                <div className="text-center">{item.id}</div>
                <div className="flex items-start gap-2">
                  <CalendarCheck2 className="mt-2 text-gray-400" />
                  <div>
                    {item.departure?.map((item, index) => {
                      return (
                        <div key={index} className="!m-0 !p-0">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  {item.route?.map((i, index) => {
                    return (
                      <>
                        <span
                          key={index}
                          className="text-sm text-gray-600 my-1"
                        >
                          {index === 0 ? (
                            <>
                              <b className="text-base flex items-center gap-2 text-gray-700 font-semibold">
                                <Bus size={20} className="text-gray-400" /> {i}
                              </b>
                              {item.route.length <= 2 ? (
                                <span className="block ml-7 font-bold text-lg mb-2">
                                  ...
                                </span>
                              ) : null}
                            </>
                          ) : index === item.route.length - 1 ? (
                            <b className="text-base items-center gap-2 ml-7 inline-block">
                              {i}
                            </b>
                          ) : (
                            <span className="flex items-center ml-6">
                              <ChevronRight
                                size={15}
                                className="text-gray-400"
                              />
                              {i}
                            </span>
                          )}
                        </span>
                      </>
                    );
                  })}
                </div>
                <div className="flex items-start gap-2">
                  <BadgeRussianRuble className="mt-2 text-gray-400" />
                  <div>
                    {item.price?.map((item, index) => {
                      return (
                        <div key={index} className="!m-0 !p-0">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-2 text-gray-400" />
                  <div>
                    {item.time?.map((item, index) => {
                      return (
                        <div key={index} className="!m-0 !p-0">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};
