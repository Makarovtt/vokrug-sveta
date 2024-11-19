import { API_URL } from "@/config/api.config";
import axios from "axios";
import { useEffect, useState } from "react";

const url = `${API_URL}/get_title_tour.php`;

const useGetTypeTour = (title: string) => {
  const [typeTour, setTypeTour] = useState<string>("");
  const getData = (slug: string) => {
    const formData = new FormData();
    formData.append("slug", slug);
    axios
      .post<string>(url, formData)
      .then((response) => {
        if (response.data) {
          setTypeTour(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData(title);
  }, []);

  return typeTour;
};

export default useGetTypeTour;
