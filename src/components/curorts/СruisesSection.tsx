import { Zagolovok } from "../elements/zagolovok";

export const СruisesSection = () => {
  const data = `<div class="infoflotWidget" data-id="YTo0OntzOjI6IklEIjtpOjMxMTc7czo0OiJVU0VSIjtzOjI0OiJkbTlyZEhKaGRtVnNRRzFoYVd3dWNuVT0iO3M6NjoiUkFORE9NIjtzOjg6IjRwbHVucnN0IjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImFhODlhZDRiNTQwZjM5YTkyMjNlZmRlMGVhZGNjZjllMGZjNDg1YWQiO30=" data-index="1"></div><script async>(function(d,w){var h=d.getElementsByTagName("script")[0];s=d.createElement("script");s.src="https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js";s.async=!0;s.onload=function(){w.createInfoflotWidget("https://bitrix.infoflot.com/rest/api/search.filter/",{key: "YTo0OntzOjI6IklEIjtpOjMxMTc7czo0OiJVU0VSIjtzOjI0OiJkbTlyZEhKaGRtVnNRRzFoYVd3dWNuVT0iO3M6NjoiUkFORE9NIjtzOjg6IjRwbHVucnN0IjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImFhODlhZDRiNTQwZjM5YTkyMjNlZmRlMGVhZGNjZjllMGZjNDg1YWQiO30=",referer: encodeURIComponent(location.href)})};h.parentNode.insertBefore(s,h);})(document,window);</script>`;
  return (
    <section className="w-full max-w-maxw mx-auto my-10 px-10">
      <Zagolovok title="Круизы по миру" className="mt-6 ml-3" />
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </section>
  );
};
