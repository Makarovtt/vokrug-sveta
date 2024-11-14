export interface ITrans {
  id: string;
  departure: string;
  price: string;
  route: string;
  time_dep: string;
  sort: string;
}

export interface IGetTransit {
  transit: ITrans[];
}
