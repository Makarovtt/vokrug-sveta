import ImgLogoFooter from "@/public/images/logotype-footer.svg";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import ImgCardMir from "@/public/images/footer/card-mir.svg";
import ImgCardVisa from "@/public/images/footer/card-visa.svg";
import ImgCardMastercard from "@/public/images/footer/card-mastercard.svg";

export function FooterMain() {
  return (
    <section className="bg-[#00567E] pt-20 pb-32 mt-auto px-10">
      <div
        className="w-full 900:max-w-maxw mx-auto max-w-[200px]
                        flex justify-between items-start flex-col 
                        700:max-w-[400px] 900:flex-row gap-5"
      >
        <Image
          src={ImgLogoFooter}
          alt="Логотип подвал"
          className="max-w-[150px]"
        />
        <section className="flex flex-col gap-5">
          <div className="text-xs text-gray-300 font-light">
            <span className="block">ИНН: 30183145557803</span>
            <span className="block">
              Юр. адрес: 414000, г. Астрахань, ул. Дубровинского, 17
            </span>
          </div>

          <div className="text-xs text-gray-300 font-extralight">
            Copyright©2024
          </div>
        </section>

        <div className="hidden 900:block">
          <ul className="flex flex-col items-start gap-2 text-white text-xs">
            <li>О нас</li>
            <li>Туристам</li>
            <li>Страхование ВЗР</li>
            <li>Оплата</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="hidden 900:block">
          <ul className="flex flex-col items-start  gap-2 text-white text-xs">
            <li>Страны</li>
            <li>Россия</li>
            <li>Астрахань</li>
            <li>Сезонный отдых</li>
            <li>Виды отдыха</li>
          </ul>
        </div>

        <section className="flex flex-col 900:flex-row gap-5">
          <div className="text-white flex flex-col gap-3">
            <div className="flex justify-start items-center gap-2 text-xs">
              <Phone size={16} strokeWidth={1.5} />8 (8512) 39-26-06
            </div>
            <div className="flex justify-start items-center gap-2 text-xs">
              <Phone size={16} strokeWidth={1.5} />8 (961) 813-16-46
            </div>
            <div className="flex justify-start items-center gap-2 text-xs">
              <Mail size={16} strokeWidth={1.5} />
              voktravel@mail.ru
            </div>
          </div>

          <div className="flex flex-row 900:flex-col gap-3">
            <Image
              src={ImgCardMir}
              alt="Оплата картой МИР"
              className="max-w-[50px]"
            />
            <Image
              src={ImgCardMastercard}
              alt="Оплата картой Mastercard"
              className="max-w-[50px]"
            />
            <Image
              src={ImgCardVisa}
              alt="Оплата картой VISA"
              className="max-w-[50px]"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
