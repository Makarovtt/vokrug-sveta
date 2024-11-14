import { IGetTours, ITour } from "@/types/tours.interface";
import axios from "axios";
import { useEffect, useState } from "react";

const URLGetTours = "https://server.vok-travel.ru/get_tours.php";

const useGetTours = () => {
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

  return orders;
};

export default useGetTours;
