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
        className="w-full max-w-maxw mx-auto
                        flex justify-between items-start"
      >
        <div>
          <Image src={ImgLogoFooter} alt="Логотип подвал" />

          <div className="text-md text-gray-300 font-light mt-16 mb-5">
            <span className="block">ИНН: 30183145557803</span>
            <span className="block">
              Юр. адрес: 414000, г. Астрахань, ул. Дубровинского, 17
            </span>
          </div>

          <div className="text-md text-gray-300 font-light mt-5">
            Copyright©2024
          </div>
        </div>

        <div>
          <ul className="flex flex-col items-start gap-6 text-white text-xl">
            <li>О нас</li>
            <li>Туристам</li>
            <li>Страхование ВЗР</li>
            <li>Оплата</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-start  gap-6 text-white text-xl">
            <li>Страны</li>
            <li>Россия</li>
            <li>Астрахань</li>
            <li>Сезонный отдых</li>
            <li>Виды отдыха</li>
          </ul>
        </div>

        <div className="text-white flex flex-col gap-3">
          <div className="flex justify-start items-center gap-2">
            <Phone size={16} strokeWidth={1.5} />8 (8512) 39-26-06
          </div>
          <div className="flex justify-start items-center gap-2">
            <Phone size={16} strokeWidth={1.5} />8 (961) 813-16-46
          </div>
          <div className="flex justify-start items-center gap-2">
            <Mail size={16} strokeWidth={1.5} />
            voktravel@mail.ru
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Image src={ImgCardMir} alt="Оплата картой МИР" />
          <Image src={ImgCardMastercard} alt="Оплата картой Mastercard" />
          <Image src={ImgCardVisa} alt="Оплата картой VISA" />
        </div>
      </div>
    </section>
  );
}
