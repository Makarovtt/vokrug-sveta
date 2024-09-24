import { Zagolovok } from "../elements/zagolovok";

export const PaymentComponent = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-3 px-10 py-10">
      <Zagolovok title="Способы оплаты" />
      <div className="personal-block">
        <h2>Мы принимаем оплату разными способами:</h2>
        <p>
          Наличный расчет, безналичный (карты Мир, Visa, Mastercard), оплата по
          счету (для ООО и ИП)
        </p>
      </div>
    </section>
  );
};
