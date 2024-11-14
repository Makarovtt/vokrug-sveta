"use client";

import { TRANSIT } from "../data/data-transit";
import { ITransit } from "./transit.interface";
import { Zagolovok } from "../elements/zagolovok";
import { TransitSectionItem } from "./TransitSectionItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/config/api.config";
import { IGetTransit, ITrans } from "@/types/transit.interface";
import { Loader } from "../ui/Loader";

const url = `${API_URL}/get_transit.php`;

export const TransitSection = () => {
  const [dataTransit, setDataTransit] = useState<ITrans[]>([]);
  useEffect(() => {
    axios
      .get<IGetTransit>(url)
      .then((response) => {
        setDataTransit(response.data.transit);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-2 500:px-10">
      <Zagolovok
        title="Проезд автобусом на Черное Море из Астрахани!"
        className="mt-6 ml-3"
      />
      <div className="overflow-x-auto">
        <table className="mt-1 mb-10 border min-w-[800px] border-slate-300 rounded-md w-full shadow pt-0 pb-3">
          <thead
            className="shadow sticky top-0 border-b border-b-slate-200 table-header-group
                         bg-white rounded-tl-md rounded-tr-md mb-2 text-sm 1100:text-base"
          >
            <tr className="table_transit pb-2 pt-8 text-gray-500">
              <td className="text-center">№</td>
              <td className="pl-7">Дни выезда</td>
              <td className="pl-7">Маршрут</td>
              <td className="pl-7">Стоимость</td>
              <td className="pl-7">Время выезда</td>
            </tr>
          </thead>
          <tbody className="pt-2 text-xs 500:text-sm 1100:text-base">
            {/* {TRANSIT &&
              TRANSIT.map((item: ITransit) => {
                let del = true;
                if (item.id % 2 === 0) del = false;
                return (
                  <TransitSectionItem key={item.id} item={item} del={del} />
                );
              })} */}
            {dataTransit.length ? (
              <>
                {dataTransit.map((item: ITrans) => {
                  let del = true;
                  if (Number(item.id) % 2 === 0) del = false;
                  return (
                    <TransitSectionItem key={item.id} item={item} del={del} />
                  );
                })}
              </>
            ) : (
              <Loader />
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
