import { AboutUsHome } from "@/components/about-us/AboutUsHome";
import { BannerMain } from "@/components/banner-main/banner-main";
import { Zagolovok } from "@/components/elements/zagolovok";
import { RussianSearchElement } from "@/components/russia/RussianSearchElement";
import { Tours } from "@/components/tours/tours";

export default function Home() {
  return (
    <>
      <BannerMain />
      <div className="w-full max-w-maxw mx-auto my-5 px-2 500:px-10">
        <Zagolovok title="Туры по России" className="mt-6 ml-3" />
        <RussianSearchElement />
      </div>
      <Tours />
      {/* <HotTours /> */}
      <AboutUsHome />
    </>
  );
}
