"use client";

import { Zagolovok } from "../elements/zagolovok";
import { TourItem } from "../authortours/tour-item";
import { Button } from "@nextui-org/react";
import useGetTours from "@/hooks/useGetTours";
import { Loader } from "../ui/Loader";
import Link from "next/link";

export function Tours() {
  const dataTours = useGetTours();
  return (
    <section className="w-full max-w-maxw mx-auto my-3 mt-14 px-10">
      <Zagolovok title="Туры из Астрахани" />
      <div className="flex justify-center my-10 gap-4 flex-wrap">
        {dataTours.length ? (
          dataTours.map((item) => {
            return <TourItem dataItem={item} key={item.id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
      <div className="flex justify-center py-5 my-10">
        <Button
          as={Link}
          href="/authortours"
          color="primary"
          variant="ghost"
          className="text-base"
        >
          смотреть все
        </Button>
      </div>
    </section>
  );
}
