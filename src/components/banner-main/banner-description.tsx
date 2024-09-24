import Image from "next/image";
import { bannerDescription, Idescription } from "../data/data-banner";

export function BannerDescription() {
  return (
    <div className="320:px-5">
      <div
        className="flex shrink-0 justify-center items-center text-white font-bold py-10
                        [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] text-center
                         text-4xl 800:text-5xl 1000:text-6xl"
      >
        Путешествуй по всему миру легко!
      </div>
      <div
        className="flex flex-col shrink-0 justify-between items-start w-full max-w-[1000px] mx-auto gap-7
                     500:ml-24 800:mx-auto 800:flex-row 800:gap-20"
      >
        {bannerDescription.map((item: Idescription) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-start gap-4"
            >
              <span className="pt-1">
                <Image src={item.image} alt="" className="w-6 shrink-1" />
              </span>
              <div
                className="text-sm text-white
                            700:text-base  900:text-xl"
              >
                {item.text}
                <span
                  className="block text-xs font-extralight
                              700:text-sm    900:text-base"
                >
                  {item.descript}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
