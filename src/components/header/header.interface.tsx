export interface IMenuSecondSubMenu {
  id: number;
  title: string;
  href?: string;
  slug?: string;
}

export interface IMenuSecondMenu {
  id: number;
  title: string;
  href: string;
  sub?: IMenuSecondSubMenu[] | undefined;
}

export interface ITypeTour {
  id: number;
  title: string;
  href?: string;
  slug?: string;
}
export interface IGetTypeTour {
  type_tours: ITypeTour[];
}
