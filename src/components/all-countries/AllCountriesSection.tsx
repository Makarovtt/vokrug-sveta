"use client";
import { Zagolovok } from "../elements/zagolovok";
import { CheckForm } from "./checkform";

export const AllCountriesSection = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-2 500:px-10">
      <Zagolovok title="Все страны" className="mt-6 ml-3" />
      <p className="text-center my-4 text-gray-600 font-semibold">
        Компания «Вокруг света» предлагает туры по всему миру.
      </p>

      <CheckForm />
    </section>
  );
};
