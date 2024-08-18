import { AboutUsText } from "@/components/about-us/about-us-text";
import { BannerMain } from "@/components/banner-main/banner-main";
import { FooterMain } from "@/components/footer/footer-main";
import { HeaderMain } from "@/components/header/header";
import { HotTours } from "@/components/hot-tours/hot-tours";
import { Tours } from "@/components/tours/tours";

export default function Home() {
  return (
    <>
      <BannerMain />
      <HotTours />
      <AboutUsText />
      <Tours />
    </>
  );
}
