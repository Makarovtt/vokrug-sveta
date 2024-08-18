"use client";

import { Button } from "@nextui-org/react";
import { TourCatalogItem } from "../elements/tourcatalog-item";
import { Zagolovok } from "../elements/zagolovok";
import { dataHotTour } from "../data/data-hot-tour";

export function HotTours() {
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Горящие туры" />
      <div className="flex justify-start gap-3 mt-4 flex-wrap">
        {dataHotTour &&
          dataHotTour.map((item) => {
            return <TourCatalogItem key={item.id} dataTour={item} />;
          })}
      </div>
      <div className="flex justify-center py-5 my-10">
        <Button color="primary" variant="ghost" className="text-xl">
          смотреть все
        </Button>
      </div>
    </section>
  );
}
