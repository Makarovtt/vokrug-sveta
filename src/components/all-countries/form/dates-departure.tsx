import { DateRangePicker } from "@nextui-org/react";
import { useLocale } from "@react-aria/i18n";
import { isWeekend, today, getLocalTimeZone } from "@internationalized/date";
import { FC } from "react";
interface IProps {
  setDatesDeparture: (arg0: string) => void;
}

export const DatesDeparture: FC<IProps> = ({ setDatesDeparture }) => {
  const showValue = (e: any) => {
    const start = `${e.start.day}.${e.start.month}.${e.start.year}`;
    const end = `${e.end.day}.${e.end.month}.${e.end.year}`;
    setDatesDeparture(start + " — " + end);
  };
  return (
    <div
      className="flex flex-col items-start justify-start gap-0 w-full
                  600:flex-row 600:items-center 600:gap-5"
    >
      <div className="min-w-[200px] ml-2 600:ml-0">
        <p className="text-gray-500 font-semibold">Выберите даты отъезда</p>
      </div>
      <div className="flex w-full flex-col gap-2 grow">
        <DateRangePicker
          // shouldForceLeadingZeros
          aria-label="Options"
          minValue={today(getLocalTimeZone())}
          visibleMonths={2}
          onChange={(e) => showValue(e)}
          classNames={{
            inputWrapper: [
              "bg-white text-white hover:!bg-white !h-auto shadow-lg py-3 !h-8 !min-h-8 py-5",
              "!border-slate-300 border-2 hover:!border-sky-400 transition",
            ],
            selectorButton: "text-gray-400",
            innerWrapper: "!text-gray-700 text-base font-normal px-4",
            segment: "!text-gray-700 text-base font-normal",
          }}
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ days: 10 }),
          }}
        />
      </div>
    </div>
  );
};
