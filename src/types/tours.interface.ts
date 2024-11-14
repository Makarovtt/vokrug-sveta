export interface ITour {
  date: string;
  id: string;
  nights: string;
  picture: string;
  price: string;
  text: string;
  title: string;
}

export interface IGetTours {
  tours: ITour[];
}
