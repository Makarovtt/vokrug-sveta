"use client";

import { HeaderSecondMenu } from "@/components/header/header-second/HeaderSecondMenu";
import { useDisclosure, Button } from "@nextui-org/react";
import { Phone, Search } from "lucide-react";
import Link from "next/link";
import HeaderSocialBtn from "../HeaderSocialBtn";
import { Menu, X } from "lucide-react";
import { HeaderSecondMobile } from "./HeaderSecondModal";
import { dataMenuTop } from "@/components/data/data-menu";

export function HeaderSecond() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="bg-[#C3E8FF]">
      <div
        className="w-full max-w-maxw mx-auto px-2 my-1
                    500:px-10    flex justify-end 900:justify-between items-center"
      >
        <div
          className="hidden
                      900:block"
        >
          <HeaderSecondMenu />
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="block 900:hidden">
            <Button
              onClick={onOpen}
              isIconOnly
              className="bg-cyan-500 py-1 h-auto text-white"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
          <div>
            <Link
              href="tel:89618131646"
              className="flex justify-start items-center gap-2 text-[#00567E] font-semibold
                        hover:opacity-90 transition text-sm"
            >
              <Phone size={15} />8 (961) 813 16-46
            </Link>
          </div>
          <HeaderSocialBtn />
        </div>
      </div>
      <HeaderSecondMobile
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        dataMenu={dataMenuTop}
      />
    </section>
  );
}
