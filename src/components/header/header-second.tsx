import { HeaderSecondMenu } from "@/components/header/header-second-menu";
import { Button } from "../ui/button";
import { Phone, Search } from "lucide-react";
import Link from "next/link";

export function HeaderSecond() {
  return (
    <section className="bg-[#C3E8FF]">
      <div
        className="w-full max-w-maxw mx-auto px-10
                        flex justify-between items-center"
      >
        <div>
          <HeaderSecondMenu />
        </div>
        <div className="flex justify-between items-center gap-5">
          <div>
            <Button variant="ghost" className="text-[#787878]">
              <Search className="mr-2" />
              Поиск
            </Button>
          </div>
          <div>
            <Link
              href="tel:89618131646"
              className="flex justify-start items-center gap-2 text-[#00567E] font-semibold
                        hover:opacity-90 transition"
            >
              <Phone />8 (961) 813 16-46
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
