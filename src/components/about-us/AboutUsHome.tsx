import { Zagolovok } from "../elements/zagolovok";
import { IGalleryItem } from "../gallery-section/gallery.interface";
import { GallerySection } from "../gallery-section/GallerySection";

const initialState: IGalleryItem[] = [
  {
    id: 3,
    src: "/images/sertificates/scan3.png",
    src_big: "/images/sertificates/big/scan3.png",
  },
  {
    id: 4,
    src: "/images/sertificates/scan4.png",
    src_big: "/images/sertificates/big/scan4.png",
  },
  {
    id: 5,
    src: "/images/sertificates/scan5.png",
    src_big: "/images/sertificates/big/scan5.png",
  },
  {
    id: 6,
    src: "/images/sertificates/scan6.png",
    src_big: "/images/sertificates/big/scan6.png",
  },
];

export function AboutUsHome() {
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Туры и экскурсии из Астрахани" />
      <p className="my-5">
        «Вокруг Света» — хорошее время на отличных условиях! C 2002 года с вами!
      </p>
      <p>
        Туристическая компания «Вокруг Света» уже более 22 лет предлагает от
        беззаботного пляжного отдыха до уникальных экскурсионных или
        экстремальных программ.
      </p>

      <p>
        С туристической компанией «Вокруг Света» Вам доступно до пятидесяти
        направлений по всему миру: от увлекательного отдыха в России до
        экзотических стран мира.{" "}
      </p>

      <div>
        <GallerySection initialState={initialState} showBtn />
      </div>
    </section>
  );
}
