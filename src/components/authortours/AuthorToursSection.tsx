"use client";

import axios from "axios";
import { dataTours } from "../data/data-tours";
import { Zagolovok } from "../elements/zagolovok";
import { TourItem } from "./tour-item";
import { FC, useEffect, useState } from "react";
import { IGetTours, ITour } from "@/types/tours.interface";
import { MainContainer } from "../ui/MainContainer";
import { Spinner } from "@nextui-org/react";
import { Loader } from "../ui/Loader";
import useGetTours from "@/hooks/useGetTours";
import useGetTypeTour from "@/hooks/useGetTypeTour";

interface IProps {
  dataTours: ITour[];
  title?: string;
}

export const AuthorToursSection: FC<IProps> = ({ dataTours, title = "" }) => {
  const typeTour = useGetTypeTour(title);
  return (
    <MainContainer>
      <Zagolovok
        title="Туры из Астрахани"
        dopTitle={typeTour}
        className="mt-6 ml-3"
      />
      <div className="flex justify-center my-14 gap-4 flex-wrap">
        {dataTours.length ? (
          dataTours.map((item) => {
            return <TourItem dataItem={item} key={item.id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </MainContainer>
  );
};
