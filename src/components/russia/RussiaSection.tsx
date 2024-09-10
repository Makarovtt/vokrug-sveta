import { Zagolovok } from "../elements/zagolovok";
import { RussianSearchElement } from "./RussianSearchElement";

export const RussianSection = () => {
  const data = `<script type="text/javascript" charset="utf-8" src="https://stells.info/assets/js/partner.fire.js"></script>
  <div class="s-partnership" style="display:none;">najAUgXvCGn6EmpnQ%2FToCuo2OcTEYXHZhbndFrdjctk%3D</div>`;

  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Туры по России" className="mt-6 ml-3" />
      <RussianSearchElement />
    </section>
  );
};
