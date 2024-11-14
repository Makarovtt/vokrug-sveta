"use client";

import axios from "axios";
import { dataTours } from "../data/data-tours";
import { Zagolovok } from "../elements/zagolovok";
import { TourItem } from "./tour-item";
import { useEffect, useState } from "react";
import { IGetTours, ITour } from "@/types/tours.interface";
import { MainContainer } from "../ui/MainContainer";
import { Spinner } from "@nextui-org/react";
import { Loader } from "../ui/Loader";

const URLGetTours = "https://server.vok-travel.ru/get_tours.php";

export const AuthorToursSection = () => {
  const [orders, setOrders] = useState<ITour[]>([]);
  const getData = () => {
    axios
      .get<IGetTours>(URLGetTours)
      .then((response) => {
        if (response.data) {
          setOrders(response.data.tours);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(orders);
  return (
    <MainContainer>
      <Zagolovok title="Туры из Астрахани" className="mt-6 ml-3" />
      <div className="flex justify-center my-14 gap-4 flex-wrap">
        {orders.length ? (
          orders.map((item) => {
            return <TourItem dataItem={item} key={item.id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </MainContainer>
  );
};
