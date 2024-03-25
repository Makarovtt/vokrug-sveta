import Link from "next/link";
import Logo from "@/public/images/logotype.svg";
import Image from "next/image";

export function HeaderFirst() {
  return (
    <div
      className="w-full max-w-[1700px] mx-auto py-4
                    flex justify-between items-center"
    >
      <div>
        <Link href="/">
          <Image src={Logo} alt="Логотип" />
        </Link>
      </div>
      <div className="flex justify-end items-center text-xl gap-7">
        <div>СТРАНЫ</div>
        <div>РОССИЯ</div>
        <div>АСТРАХАНЬ</div>
        <div>ВИДЫ ОТДЫХА</div>
        <div>СЕЗОН</div>
      </div>
    </div>
  );
}
