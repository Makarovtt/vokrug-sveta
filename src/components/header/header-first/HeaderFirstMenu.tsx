import { Menu, X } from "lucide-react";
import { Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { dataMenu } from "../../data/data-menu";
import { IMenuSecondMenu } from "../header.interface";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderMenuItem from "./HeaderMenuItem";

export function HeaderFirstMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const router = useRouter();
  return (
    <>
      <div className="1100:hidden flex justify-between gap-2">
        <Button
          onClick={onOpen}
          endContent={isOpen ? <X size={18} /> : <Menu size={18} />}
          className="text-xs 500:text-sm h-auto py-2 w-auto min-w-10 px-2
                      500:px-4"
        >
          Меню
        </Button>
      </div>
      <div
        className="justify-end items-center text-xl gap-4 h-full
                  hidden 1100:flex"
      >
        {dataMenu &&
          dataMenu?.map((itemMenu: IMenuSecondMenu | undefined) => {
            return <HeaderMenuItem key={itemMenu?.id} item={itemMenu} />;
          })}
      </div>
      <HeaderMobileMenu
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        dataMenu={dataMenu}
      />
    </>
  );
}
