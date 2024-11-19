import { Menu, X } from "lucide-react";
import { Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { dataMenu } from "../../data/data-menu";
import { IGetTypeTour, IMenuSecondMenu, ITypeTour } from "../header.interface";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderMenuItem from "./HeaderMenuItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/config/api.config";

const url = `${API_URL}/get_type_tour.php`;

export function HeaderFirstMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [dataSubMenu, setDataSubMenu] = useState<ITypeTour[]>([]);
  // const router = useRouter();

  useEffect(() => {
    axios
      .get<IGetTypeTour>(url)
      .then((res) => {
        setDataSubMenu(res.data.type_tours);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            if (itemMenu?.id === 3) itemMenu.sub = dataSubMenu;
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
