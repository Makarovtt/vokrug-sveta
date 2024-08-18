"use client";

import Link from "next/link";
import Logo from "@/public/images/logotype.svg";
import Image from "next/image";
import iconWhatsapp from "@/public/images/icons/whatsapp.svg";
import iconTelegram from "@/public/images/icons/telegram.svg";
import { ChevronDown } from "lucide-react";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { dataMenu } from "../data/data-menu";
import { IMenuSecondMenu, IMenuSecondSubMenu } from "./header.interface";

export function HeaderFirst() {
  const pathname = usePathname();
  return (
    <div className="border-b border-b-slate-300 shadow-md">
      <div className="w-full max-w-maxw mx-auto flex justify-between items-center px-10 h-[110px]">
        <div className="py-4">
          <Link href="/">
            <Image src={Logo} alt="Логотип" />
          </Link>
        </div>
        <div className="flex justify-end items-center text-xl gap-7 h-full">
          {dataMenu &&
            dataMenu?.map((itemMenu: IMenuSecondMenu | undefined) => {
              return (
                <div
                  className={cn(
                    "flex justify-start items-center relative group",
                    "cursor-pointer h-full ",
                    pathname === itemMenu?.href
                      ? "border-b-2 border-b-blue-500 "
                      : "",
                  )}
                  key={itemMenu?.id}
                >
                  <Button
                    variant="light"
                    color="primary"
                    as={Link}
                    href={itemMenu?.href}
                    className="text-xl"
                  >
                    {itemMenu?.title}
                    {itemMenu?.sub?.length ? (
                      <ChevronDown className="ml-1 size-5 group-hover:rotate-180 transition" />
                    ) : null}
                  </Button>
                  {itemMenu?.sub?.length ? (
                    <div
                      className="absolute bg-white rounded-lg px-1 py-2 w-[300px] z-[70] hidden top-[110px]
shadow-[0px_0px_4px_1px_rgba(0,0,0,0.16)]
group-hover:block"
                    >
                      {itemMenu.sub &&
                        itemMenu.sub.map(
                          (item: IMenuSecondSubMenu | undefined) => {
                            return (
                              <Button
                                as={Link}
                                href={item?.href}
                                key={item?.id}
                                className={cn(
                                  "py-1 w-full text-left text-sm bg-white hover:bg-gray-100 justify-start",
                                  pathname === item?.href
                                    ? "text-cyan-700 font-semibold"
                                    : "",
                                )}
                              >
                                {item?.title}
                              </Button>
                            );
                          },
                        )}
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
        <div className="flex items-center gap-3 py-4">
          <Button
            radius="none"
            isIconOnly
            as={Link}
            variant="light"
            href="#"
            className="w-10 h-10"
          >
            <Image src={iconWhatsapp} alt="" />
          </Button>
          <Button
            radius="none"
            isIconOnly
            as={Link}
            variant="light"
            href="#"
            className="w-10 h-10"
          >
            <Image src={iconTelegram} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
