import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import iconWhatsapp from "@/public/images/icons/whatsapp.svg";
import iconTelegram from "@/public/images/icons/telegram.svg";
import iconVk from "@/public/images/icons/vk.svg";

const SocialButtons: FC = () => {
  return (
    <div className="flex items-center justify-between gap-1 py-1">
      <Button
        radius="none"
        isIconOnly
        as={Link}
        variant="light"
        href="https://wa.me/89618131646"
        target="_blank"
        className="w-2 h-4 min-w-5"
      >
        <Image src={iconWhatsapp} alt="" className="object-contain h-full" />
      </Button>
      <Button
        radius="none"
        isIconOnly
        as={Link}
        variant="light"
        href="https://t.me/voktravel"
        target="_blank"
        className="w-2 h-4 min-w-5"
      >
        <Image src={iconTelegram} alt="" className="object-contain h-full" />
      </Button>
      <Button
        radius="none"
        isIconOnly
        as={Link}
        variant="light"
        href="https://vk.com/voktravel2002"
        target="_blank"
        className="w-2 h-4 min-w-5"
      >
        <Image src={iconVk} alt="" className="object-contain h-full" />
      </Button>
    </div>
  );
};

export default SocialButtons;
