import { Tour } from "@/components/authortours/page-tour/Tour";
import { API_URL } from "@/config/api.config";
import axios from "axios";
import { Metadata } from "next";

async function getData(id: string) {
  const url = `${API_URL}/get_tour.php`;
  const formData = new FormData();
  formData.append("id", id);
  const res = await axios.post(url, formData);

  if (!res.data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.data.tour;
}
const page = async ({ params }: { params: { authortourId: string } }) => {
  const data = await getData(params.authortourId);
  return <Tour pageInfo={data} />;
};
export default page;
