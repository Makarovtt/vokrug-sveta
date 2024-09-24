import { GallerySection } from "../gallery-section/GallerySection";
import { Zagolovok } from "../elements/zagolovok";
import { IGalleryItem } from "../gallery-section/gallery.interface";

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
  {
    id: 1,
    src: "/images/sertificates/scan1.png",
    src_big: "/images/sertificates/big/scan1.png",
  },
  {
    id: 2,
    src: "/images/sertificates/scan2.png",
    src_big: "/images/sertificates/big/scan2.png",
  },
];
export const SertificatesComponent = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-3 px-10 py-10">
      <Zagolovok title="Сертификаты и грамоты" />
      <GallerySection initialState={initialState} />
    </section>
  );
};
