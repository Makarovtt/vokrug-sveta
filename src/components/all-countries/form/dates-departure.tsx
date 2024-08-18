import { DateRangePicker } from "@nextui-org/react";
import { useLocale } from "@react-aria/i18n";
import { isWeekend, today, getLocalTimeZone } from "@internationalized/date";

export const DatesDeparture = () => {
  return (
    <>
      <p className="mt-10 text-gray-600 font-semibold">Выберите даты отъезда</p>
      <div className="flex w-full max-w-xs flex-col gap-2 mt-3">
        <DateRangePicker
          shouldForceLeadingZeros
          aria-label="Options"
          minValue={today(getLocalTimeZone())}
          visibleMonths={2}
          classNames={{
            inputWrapper: [
              "bg-white text-white hover:!bg-white !h-auto shadow-lg py-3",
              "!border-slate-300 border-2 hover:!border-sky-400 transition",
            ],
            selectorButton: "text-gray-400",
            innerWrapper: "!text-gray-700 text-lg font-normal px-4",
            segment: "!text-gray-700 text-lg font-normal",
          }}
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ days: 10 }),
          }}
        />
      </div>
    </>
  );
};
