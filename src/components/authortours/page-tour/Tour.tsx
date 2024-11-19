"use client";

import { Zagolovok } from "@/components/elements/zagolovok";
import { MainContainer } from "@/components/ui/MainContainer";
import { convertPrice, textNights } from "@/lib/utils";
import { ITour } from "@/types/tours.interface";
import { Calendar, SunMoon, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface IProps {
  pageInfo: ITour;
}

export const Tour: FC<IProps> = ({ pageInfo }) => {
  const router = useRouter();
  return (
    <MainContainer>
      <div className="flex gap-4 items-center justify-start">
        <div
          className="w-10 h-10 bg-cyan-600 flex items-center justify-center rounded-full opacity-70
                        cursor-pointer hover:opacity-100 transition"
        >
          {/* <Link href="/authortours"> */}
          <Undo2 color="white" onClick={() => router.back()} />
          {/* </Link> */}
        </div>
        <div className="flex items-center justify-start gap-5">
          <Zagolovok
            title={`«${pageInfo.title}»`}
            className="my-4"
            tour={true}
          />
        </div>
      </div>

      <div className="relative max-w-[800px] w-full mx-auto my-10 h-[400px]">
        <Image
          src={pageInfo.picture}
          alt={pageInfo.title}
          fill
          className="object-cover h-full rounded-lg shadow-md border-1 border-default-200"
        />
      </div>
      <div className="flex items-canter gap-5 justify-start px-4">
        <div className="flex gap-2 items-center text-sm">
          <Calendar strokeWidth={1} size={20} />
          {pageInfo.date}
        </div>
        <div className="flex gap-2 items-center text-sm">
          <SunMoon strokeWidth={1} size={20} />
          {textNights(Number(pageInfo.nights))}
        </div>
        <div className="flex gap-2 margin-auto text-lg items-center font-semibold text-cyan-700">
          {convertPrice(Number(pageInfo.price))}
        </div>
      </div>
      <div className="my-10">
        {pageInfo.text && (
          <div dangerouslySetInnerHTML={{ __html: pageInfo.text }} />
        )}
      </div>
    </MainContainer>
  );
};
