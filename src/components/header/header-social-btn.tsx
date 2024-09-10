import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import iconWhatsapp from "@/public/images/icons/whatsapp.svg";
import iconTelegram from "@/public/images/icons/telegram.svg";

const HeaderSocialBtn: FC = () => {
  return (
    <div className="flex items-center justify-between gap-1 py-1">
      <Button
        radius="none"
        isIconOnly
        as={Link}
        variant="light"
        href="#"
        className="w-2 h-4"
      >
        <Image src={iconWhatsapp} alt="" className="object-contain h-full" />
      </Button>
      <Button
        radius="none"
        isIconOnly
        as={Link}
        variant="light"
        href="#"
        className="w-2 h-4 !px-0"
      >
        <Image src={iconTelegram} alt="" className="object-contain h-full" />
      </Button>
    </div>
  );
};

export default HeaderSocialBtn;
