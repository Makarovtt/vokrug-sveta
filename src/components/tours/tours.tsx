import { Zagolovok } from "../elements/zagolovok";
import { dataTours } from "../data/data-tours";
import { TourItem } from "../authortours/tour-item";
import { Button } from "@nextui-org/react";

export function Tours() {
  return (
    <section className="w-full max-w-maxw mx-auto my-3 mt-14 px-10">
      <Zagolovok title="Туры из Астрахани" />
      <div className="flex justify-center my-10 gap-4 flex-wrap">
        {dataTours &&
          dataTours.map((item) => {
            return <TourItem dataItem={item} key={item.id} />;
          })}
      </div>
      <div className="flex justify-center py-5 my-10">
        <Button color="primary" variant="ghost" className="text-base">
          смотреть все
        </Button>
      </div>
    </section>
  );
}
