import React, { useState } from "react";
import { QuantityHumans } from "./form/quantity-humans";
import { IHumans, IUserContacts } from "./form.interface";
import { TabsDeliverySend } from "./form/tabs-delivery-send";
import { QuantityNights } from "./form/quantity-nights";
import { ChoiceCountries } from "./form/countries-choice";
import { CityDeparture } from "./form/city-departure";
import { DatesDeparture } from "./form/dates-departure";
import { NameUser } from "./form/name-user";
import { SubmitBtn } from "./form/submit-btn";
import { getLocalTimeZone, today } from "@internationalized/date";
import { CommentUser } from "./form/comment";
import axios from "axios";

const globalUrl = process.env.SERVER_URL;
const dayToday = today(getLocalTimeZone());
const dayEndday = today(getLocalTimeZone()).add({ days: 10 });
const initialValueDates = `${dayToday.day}.${dayToday.month}.${dayToday.year} — ${dayEndday.day}.${dayEndday.month}.${dayEndday.year}`;

export const CheckForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [countries, setCountries] = useState<string>("");
  const [values, setValues] = useState<any>(new Set([]));
  // console.log(Array.from(values).join(", "));
  const [datesDeparture, setDatesDeparture] =
    useState<string>(initialValueDates);
  const [quantityNights, setQuantityNights] = useState<string>("5 — 10");

  const [valueContacts, setValueContacts] = useState<IUserContacts>(
    {} as IUserContacts,
  );
  const [contacts, setContacts] = useState<string | number>("phone");

  const [humansQuantity, setHumanQuantity] = useState<IHumans>({
    humans: 1,
    kids: 0,
  });

  const [userName, setUserName] = useState<string>("");
  const [userComment, setUserComment] = useState<string>("");

  const sendForm = async () => {
    setIsLoading(true);
    const newForm = new FormData();

    newForm.append("theme", "allcountries");
    newForm.append("name", userName);
    newForm.append("comment", userComment);
    newForm.append("countries", countries);
    let strCity = "";
    for (let city of values) {
      if (city === "astrakhan") strCity += "Астрахань; ";
      if (city === "volgograd") strCity += "Волгоград; ";
      if (city === "moscow") strCity += "Москва; ";
    }
    newForm.append("cityDeparture", strCity);
    newForm.append("datesDeparture", datesDeparture);
    newForm.append("quantityNights", quantityNights);
    newForm.append(
      "humansQuantity",
      `${humansQuantity.humans} - вз., ${humansQuantity.kids} - дет.`,
    );
    let str = "";
    if (valueContacts.phone) str += "телефон: " + valueContacts.phone + "; ";
    if (valueContacts.whatsap)
      str += "whatsap: " + valueContacts.whatsap + "; ";
    if (valueContacts.telegram)
      str += "telegram: " + valueContacts.telegram + "; ";
    if (valueContacts.email) str += "email: " + valueContacts.email + "; ";
    newForm.append("valueContacts", str);

    await axios
      .post(`https://server.cafeshm.ru/mailto/mail_vok-travel.php`, newForm)
      .then((res) => {
        if (res.data == 1) {
          setIsAnswer(true);
        } else {
          console.log(res.data);
        }
        setIsLoading(false);
      });
  };

  return (
    <div
      className="bg-slate-50 border border-slate-200 shadow-xl
                   rounded-lg max-w-[800px] mx-auto my-14 py-10 px-2 500:px-8"
    >
      {!isAnswer ? (
        <>
          <div className="max-w-[800px] w-full mx-auto mb-8 text-xl text-gray-500 font-normal text-center">
            Оставьте заявку и мы подберем для вас наилучшее предложение.
          </div>
          <div className="flex flex-col gap-4">
            <ChoiceCountries setCountries={setCountries} />
            <CityDeparture values={values} setValues={setValues} />
            <DatesDeparture setDatesDeparture={setDatesDeparture} />
            <QuantityNights
              quantityNights={quantityNights}
              setQuantityNights={setQuantityNights}
            />
            <QuantityHumans
              humansQuantity={humansQuantity}
              setHumanQuantity={setHumanQuantity}
            />
            <hr className="mt-3" />
            <TabsDeliverySend
              valueContacts={valueContacts}
              setValueContacts={setValueContacts}
              setContacts={setContacts}
            />
            <NameUser userName={userName} setUserName={setUserName} />
            <CommentUser
              userComment={userComment}
              setUserComment={setUserComment}
            />
            <SubmitBtn onClick={sendForm} isLoading={isLoading} />
          </div>
        </>
      ) : (
        <div className="text-center">Сообщение отправлено. Спасибо!</div>
      )}
    </div>
  );
};
