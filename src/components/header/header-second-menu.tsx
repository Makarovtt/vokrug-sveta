import { Button } from "@nextui-org/react";

export function HeaderSecondMenu() {
  return (
    <div className="flex justify-start items-center gap-1 text-base">
      <Button variant="light">О нас</Button>
      <Button variant="light">Туристам</Button>
      <Button variant="light">Страхование ВЗР</Button>
      <Button variant="light">Оплата</Button>
      <Button variant="light">Контакты</Button>
    </div>
  );
}
