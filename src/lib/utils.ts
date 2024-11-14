import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertPrice = (price: number) => {
  return price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  });
};

export const textNights = (nights: number) => {
  let str = ''
  if(nights === 1) {
    str = 'ночь';
  } else if ([2,3,4,].includes(nights)) {
    str = 'ночи'
  } else {
    str = 'ночей'
  }
  return `${nights} ${str}`;
};
