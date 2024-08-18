export interface IMenuSecondSubMenu {
  id: number;
  title: string;
  href: string;
}

export interface IMenuSecondMenu {
  id: number;
  title: string;
  href: string;
  sub?: IMenuSecondSubMenu[] | undefined;
}
