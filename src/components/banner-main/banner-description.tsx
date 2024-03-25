import IconPig from "@/public/images/banner/icon-pig.svg";
import IconWorld from "@/public/images/banner/icon-world.svg";
import IconSerf from "@/public/images/banner/icon-serf.svg";
import Image from "next/image";

export function BannerDescription() {
  return (
    <>
      <div
        className="flex justify-center items-center text-6xl text-white font-bold py-10
                        [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"
      >
        Путешествуй по всему миру легко!
      </div>
      <div className="flex justify-between items-start w-full max-w-[1000px] mx-auto gap-20">
        <div className="flex justify-between items-start gap-4">
          <span className="pt-1">
            <Image src={IconPig} alt="" />
          </span>
          <div className="text-lg text-white">
            Без переплат
            <span className="block text-sm font-extralight">
              мы не делаем наценок
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start gap-4">
          <span className="pt-1">
            <Image src={IconWorld} alt="" />
          </span>
          <div className="text-lg text-white">
            По всему миру
            <span className="block text-sm font-extralight">
              туры в любую точку мира
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start gap-4">
          <span className="pt-1">
            <Image src={IconSerf} alt="" />
          </span>
          <div className="text-lg text-white">
            Официальные туроператоры
            <span className="block text-sm font-extralight">
              сотрудничаем только с лицензированными туроператорами
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
