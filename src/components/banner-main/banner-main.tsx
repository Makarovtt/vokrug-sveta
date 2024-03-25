import { BannerDescription } from "./banner-description";
import { BannerForm } from "./banner-form";

export function BannerMain() {
  return (
    <section
      className="w-full mx-auto h-[505px] flex flex-col
            bg-[url('/images/banner/banner-bg.jpg')] bg-center"
    >
      <BannerDescription />
      <BannerForm />
    </section>
  );
}
