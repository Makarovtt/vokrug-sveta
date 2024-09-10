import React, { useCallback, useState } from "react";
import { QuantityHumans } from "./form/quantity-humans";
import { IHumans } from "./form.interface";
import { TabsDeliverySend } from "./form/tabs-delivery-send";
import { QuantityNights } from "./form/quantity-nights";
import { ChoiceCountries } from "./form/countries-choice";
import { CityDeparture } from "./form/city-departure";
import { DatesDeparture } from "./form/dates-departure";
import { NameUser } from "./form/name-user";
import { SubmitBtn } from "./form/submit-btn";

export const CheckForm = () => {
  const [humansQuantity, setHumanQuantity] = useState<IHumans>({
    humans: 1,
    kids: 0,
  });
  const changeHumanQuantity = useCallback(
    (action: string) => {
      switch (action) {
        case "addHuman":
          setHumanQuantity((prev) => {
            return { ...humansQuantity, humans: prev.humans + 1 };
          });
          break;

        case "delHuman":
          if (humansQuantity.humans > 1)
            setHumanQuantity((prev) => {
              return { ...humansQuantity, humans: prev.humans - 1 };
            });
          break;

        case "addKid":
          setHumanQuantity((prev) => {
            return { ...humansQuantity, kids: prev.kids + 1 };
          });
          break;

        case "delKid":
          if (humansQuantity.kids > 0)
            setHumanQuantity((prev) => {
              return { ...humansQuantity, kids: prev.kids - 1 };
            });
          break;
      }
    },
    [humansQuantity],
  );

  return (
    <div
      className="bg-slate-50 border border-slate-200 shadow-xl
                   rounded-lg max-w-[800px] mx-auto my-14 py-10  px-8"
    >
      <div className="max-w-[800px] w-full mx-auto mb-8 text-3xl text-gray-500 font-semibold text-center">
        Оставьте заявку и мы подберем для вас наилучшее предложение.
      </div>
      <ChoiceCountries />
      <CityDeparture />
      <DatesDeparture />
      <QuantityNights />
      <QuantityHumans
        humansQuantity={humansQuantity}
        changeHumanQuantity={changeHumanQuantity}
      />
      <hr className="mt-10" />
      <TabsDeliverySend />
      <NameUser />
      <SubmitBtn />
    </div>
  );
};
