import { AuthorToursSection } from "@/components/authortours/AuthorToursSection";
import { API_URL } from "@/config/api.config";
import { IGetTours } from "@/types/tours.interface";
import axios from "axios";

async function getData(slug: string) {
  const url = `${API_URL}/get_tours.php`;
  const formData = new FormData();
  formData.append("slug", slug);
  const res = await axios.post<IGetTours>(url, formData);

  if (!res.data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  //   console.log("GET", res.data);
  return res.data.tours;
}

const AuthorTours = async ({ params }: { params: { typetour: string } }) => {
  //   console.log("SLUG", params.typetour);
  const data = await getData(params.typetour);
  return <AuthorToursSection dataTours={data} title={params.typetour} />;
};

export default AuthorTours;
