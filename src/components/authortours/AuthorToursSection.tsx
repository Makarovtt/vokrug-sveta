import { dataTours } from "../data/data-tours";
import { Zagolovok } from "../elements/zagolovok";
import { TourItem } from "../tours/tour-item";

export const AuthorToursSection = () => {
  return (
    <div className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Туры из Астрахани" className="mt-6 ml-3" />
      <div className="flex justify-center my-14 gap-4 flex-wrap">
        {dataTours &&
          dataTours.map((item) => {
            return <TourItem dataItem={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};
