import IconPig from "@/public/images/banner/icon-pig.svg";
import IconWorld from "@/public/images/banner/icon-world.svg";
import IconSerf from "@/public/images/banner/icon-serf.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Idescription {
  id: number;
  image: string | StaticImport;
  text: string;
  descript?: string;
}

export const bannerDescription: Idescription[] = [
  {
    id: 1,
    image: IconPig,
    text: `Без переплат`,
    descript: "мы не делаем наценок",
  },
  {
    id: 2,
    image: IconWorld,
    text: `По всему миру`,
    descript: "туры в любую точку мира",
  },
  {
    id: 3,
    image: IconSerf,
    text: `Официальные туроператоры`,
    descript: "сотрудничаем только с лицензированными туроператорами",
  },
];
