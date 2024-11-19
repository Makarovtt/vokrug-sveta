export interface ITour {
  date: string;
  id: string;
  nights?: string;
  picture: string;
  price: string;
  text?: string;
  title: string;
  type_tour: string;
}

export interface IGetTours {
  tours: ITour[];
}
