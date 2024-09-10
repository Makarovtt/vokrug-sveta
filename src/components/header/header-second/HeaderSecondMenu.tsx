import { Button, useDisclosure } from "@nextui-org/react";
import { dataMenuTop } from "../../data/data-menu";
import Link from "next/link";

interface IMenuTop {
  id: number;
  title: string;
  href: string;
}

export function HeaderSecondMenu() {
  return (
    <>
      <div className="flex justify-start items-center gap-1 text-xs">
        {dataMenuTop &&
          dataMenuTop.map((item: IMenuTop) => {
            return (
              <Button
                key={item.id}
                variant="light"
                as={Link}
                href={item.href}
                className="text-xs p-1 m-0 h-auto data-[hover=true]:bg-blue-400 data-[hover=true]:text-white"
              >
                {item.title}
              </Button>
            );
          })}
      </div>
    </>
  );
}
