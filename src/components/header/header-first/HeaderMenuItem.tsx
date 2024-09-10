import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { IMenuSecondMenu, IMenuSecondSubMenu } from "../header.interface";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Iitem {
  item: IMenuSecondMenu | undefined;
}
const HeaderMenuItem: FC<Iitem> = ({ item }) => {
  const pathname = usePathname();
  function goToHref(href: any) {
    // const pathname = href;
    // window.location.pathname(pathname);
    // console.log(href);
    window.location.replace(href);
  }
  return (
    <div
      className={cn(
        "flex justify-start items-center relative group",
        "cursor-pointer h-full ",
        pathname === item?.href ? "border-b-2 border-b-blue-500 " : "",
      )}
      key={item?.id}
    >
      <Button
        variant="light"
        color="primary"
        // as={Link}
        // href={itemMenu?.href}
        onClick={() => goToHref(item?.href)}
        className="text-base"
      >
        {item?.title}
        {item?.sub?.length ? (
          <ChevronDown className="ml-1 size-5 group-hover:rotate-180 transition" />
        ) : null}
      </Button>
      {item?.sub?.length ? (
        <div
          className="absolute bg-white rounded-lg px-1 py-2 w-[300px] z-[70] hidden top-[110px]
shadow-[0px_0px_4px_1px_rgba(0,0,0,0.16)]
group-hover:block"
        >
          {item.sub &&
            item.sub.map((item: IMenuSecondSubMenu | undefined) => {
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
            })}
        </div>
      ) : null}
    </div>
  );
};

export default HeaderMenuItem;
