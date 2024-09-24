import Link from "next/link";
import { Zagolovok } from "../elements/zagolovok";
import { Mail, MapPin, PhoneCallIcon } from "lucide-react";
import SocialButtons from "../social-buttons/SocialButtons";

const codeKarta = `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A50e82ffc4c74f102ad3a1897e8683eeecb24d61abbcca342bd88e523284d1245&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`;
export const ContactsComponent = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-3 px-10 py-10">
      <Zagolovok title="Контакты" />
      <div
        className="flex flex-col-reverse justify-center items-center gap-10
                        600:flex-row"
      >
        <div className="flex flex-col items-start gap-3">
          <div className="flex justify-start items-start gap-2">
            <MapPin
              strokeWidth="1"
              className="mt-1 grow-0 shrink-0"
              color="#4589c0"
              size={18}
            />
            <span>
              414000 г. Астрахань, ул. Володарского 14А, офис 41, 4 этаж
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <PhoneCallIcon strokeWidth="1" color="#4589c0" size={18} />
            <span>
              <Link href="tel:88512392606">8(8512) 39-26-06</Link>
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <PhoneCallIcon strokeWidth="1" color="#4589c0" size={18} />
            <span>
              <Link href="tel:89618161316">8(961) 816 13-16</Link>
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Mail strokeWidth="1" color="#4589c0" size={18} />
            <span>
              <Link href="mailto:voktravel@mail.ru">voktravel@mail.ru</Link>
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SocialButtons />
          </div>
        </div>
        <div className="h-[400px] w-full 600:w-4/5">
          <div
            className="h-[400px] w-full"
            dangerouslySetInnerHTML={{ __html: codeKarta }}
          />
        </div>
      </div>
    </section>
  );
};
