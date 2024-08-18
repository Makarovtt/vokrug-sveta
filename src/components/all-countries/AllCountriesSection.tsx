"use client";
import { Zagolovok } from "../elements/zagolovok";
import { CheckForm } from "./checkform";
import { Form } from "./Form";

export const AllCountriesSection = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Все страны" className="mt-6 ml-3" />
      <p className="text-center my-4 text-gray-600 font-semibold">
        Компания «Вокруг света» предлагает туры по всему миру.
      </p>

      <p className="text-center my-4 text-gray-600 font-semibold">
        Оставьте заявку и мы подберем для вас наилучшее предложение.
      </p>

      <CheckForm />
    </section>
  );
};
