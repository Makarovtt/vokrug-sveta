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

export function AboutUsText() {
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Туры и экскурсии из Астрахани" />
      <p className="my-5">
        «Вокруг Света» — хорошее время на отличных условиях! C 2002 года с вами!
      </p>
      <p className="my-5">Предлагаем вам:</p>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <p>туры выходного дня из Астрахани;</p>
        </li>
        <li>
          <p>
            проезд на комфортабельных автобусах на Черноморское побережье и на
            курорты КМВ;
          </p>
        </li>
        <li>
          <p>
            Европа и Африка, пляжный отдых и экскурсионные туры с вылетами из
            Астрахани, Волгограда, Минеральных вод, Махачкалы и др. городов;
          </p>
        </li>
        <li>
          <p>
            экскурсионные, горнолыжные и оздоровительные туры по России и
            Европе;
          </p>
        </li>
        <li>
          <p>
            свадебные туры с проведением церемоний в экзотических странах и
            Европе;
          </p>
        </li>
        <li>
          <p>паломнические туры;</p>
        </li>
        <li>
          <p>организованные школьные группы из Астрахани;</p>
        </li>
        <li>
          <p>прием детских и взрослых групп в Астрахани;</p>
        </li>
        <li>
          <p>
            помощь в оформлении виз в Европу и другие страны мира (Китай,
            Вьетнам, Япония и т.д.);
          </p>
        </li>
        <li>
          <p>продажа авиабилетов.</p>
        </li>
      </ul>
      <p>
        «Вокруг Света» оказывает туристические услуги как корпоративным
        клиентам, так и индивидуальным туристам. Обеспечивает стабильный,
        надежный и профессиональный сервис для вас!
      </p>
      <div>
        <GallerySection initialState={initialState} showBtn />
      </div>
    </section>
  );
}
