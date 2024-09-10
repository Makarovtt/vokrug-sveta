"use client";

import Link from "next/link";
import Logo from "@/public/images/logotype.svg";
import Image from "next/image";
import { HeaderFirstMenu } from "./HeaderFirstMenu";

export function HeaderFirst() {
  return (
    <div className="border-b border-b-slate-300 shadow-md">
      <div
        className="w-full max-w-maxw mx-auto flex justify-between px-2
                       items-center 400:px-10 h-[60px]"
      >
        <div className="py-4 max-w-[180px]">
          <Link href="/">
            <Image src={Logo} alt="Логотип" />
          </Link>
        </div>
        <HeaderFirstMenu />
      </div>
    </div>
  );
}
