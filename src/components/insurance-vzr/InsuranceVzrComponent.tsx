import { Zagolovok } from "../elements/zagolovok";

export const InsuranceVzrComponent = () => {
  return (
    <section className="w-full max-w-maxw mx-auto my-3 px-10 py-10">
      <Zagolovok title="Страхование ВЗР" />
      <div className="personal-block">
        <h2>КТО МОЖЕТ БЫТЬ ЗАСТРАХОВАН</h2>

        <ul>
          <li>
            <p>
              Российские граждане, выезжающие за пределы ПМЖ/за границу РФ с
              туристическими целями, на обучение, в служебную командировку, по
              частным делам;
            </p>
          </li>
          <li>
            <p>
              Иностранные граждане, постоянно проживающие или временно
              находящиеся в РФ, выезжающие за границу РФ с туристическими
              целями, на обучение, в служебную командировку, по частным делам;
            </p>
          </li>
          <li>
            <p>Возраст застрахованных — без ограничений от 0 лет</p>
          </li>
        </ul>

        <h2>ИСКЛЮЧЕНИЯ ДЛЯ ОФОРМЛЕНИЯ ПОЛИСА:</h2>

        <ul>
          <li>
            <p>
              Выезд в страну постоянного проживания Застрахованного или в
              страну, гражданином которой он является;
            </p>
          </li>
          <li>
            <p>Выезд на ПМЖ или выезд для проживания на условиях ВМЖ1;</p>
          </li>
          <li>
            <p>
              Для граждан РФ страхование не распространяется на территорию в
              радиусе 100 км от ПМЖ на территории РФ;
            </p>
          </li>
          <li>
            <p>
              Страхование не распространяется на исключения по имуществу в
              соответствии с условиями продукта
            </p>
          </li>
        </ul>

        <h2>ОБЩИЕ УСЛОВИЯ ДЛЯ ВСЕХ РИСКОВ</h2>

        <p>Франшиза не применяется — для любого из рисков!</p>

        <p>Количество застрахованных дней:</p>
        <ul>
          <li>
            <p>
              для однократной поездки — любое, по количеству последовательно
              застрахованных дней (от 1 суток до 1 года);
            </p>
          </li>
          <li>
            <p>
              для многократных поездок — период 30 / 60 / 90 / 180 / 365 дней
              (по суммарной длительности пребывания в любом количестве поездок)
              в течение 90 / 180 / 365 дней. Для периодов 180 и 365 дней —
              каждая поездка не более 90 дней.
            </p>
          </li>
        </ul>

        <h2>СОЧЕТАНИЕ РИСКОВ:</h2>
        <p>
          Договор страхования должен быть заключен с обязательным выбором риска
          «Медицинская и экстренная помощь», остальные риски могут быть
          добавлены в любом сочетании!
        </p>

        <h2>ТЕРРИТОРИЯ СТРАХОВАНИЯ:</h2>
        <p>
          Весь мир или конкретные страны, за исключением запрещенных к
          страхованию следующих стран:
        </p>
        <ul>
          <li>
            <p>Атолл Джонстон</p>
          </li>
          <li>
            <p>Атолл Мидуэй</p>
          </li>
          <li>
            <p>Афганистан</p>
          </li>
          <li>
            <p>Ирак</p>
          </li>
          <li>
            <p>Йемен</p>
          </li>
          <li>
            <p>Пакистан</p>
          </li>
          <li>
            <p>Палестина</p>
          </li>
          <li>
            <p>Сектор Газа</p>
          </li>
          <li>
            <p>Сирия</p>
          </li>
          <li>
            <p>Сомали</p>
          </li>
          <li>
            <p>Французские Южные и Антарктические территории</p>
          </li>
          <li>
            <p>Шпицберген и Ян-Майен</p>
          </li>
          <li>
            <p>Южная Георгия и Южные Сандвичевы острова</p>
          </li>
          <li>
            <p>Кот-д’Ивуар</p>
          </li>
          <li>
            <p>Ливия</p>
          </li>
          <li>
            <p>Остров Буве</p>
          </li>
          <li>
            <p>Гренландия</p>
          </li>
          <li>
            <p>Демократическая Республика Конго</p>
          </li>
          <li>
            <p>Остров Херд и острова Макдоналд</p>
          </li>
        </ul>
      </div>
    </section>
  );
};