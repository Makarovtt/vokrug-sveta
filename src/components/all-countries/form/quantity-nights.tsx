import { Select, SelectItem } from "@nextui-org/select";
import { FC } from "react";

const arrStart = [
  { key: "3", label: "3" },
  { key: "4", label: "4" },
  { key: "5", label: "5" },
  { key: "6", label: "6" },
  { key: "7", label: "7" },
  { key: "8", label: "8" },
  { key: "9", label: "9" },
  { key: "10", label: "10" },
];

const arrEnd = [
  { key: "end5", label: "5" },
  { key: "end6", label: "6" },
  { key: "end7", label: "7" },
  { key: "end8", label: "8" },
  { key: "end9", label: "9" },
  { key: "end10", label: "10" },
  { key: "end11", label: "11" },
  { key: "end12", label: "12" },
];

interface Iprops {
  quantityNights: string;
  setQuantityNights: (arg0: string) => void;
}

export const QuantityNights: FC<Iprops> = ({
  quantityNights,
  setQuantityNights,
}) => {
  const changeStartNights = (nights: string) => {
    const splitArr = quantityNights.split(" — ");
    setQuantityNights(nights + " — " + splitArr[1]);
  };
  const changeEndNights = (nights: string) => {
    const splitArr = quantityNights.split(" — ");
    setQuantityNights(splitArr[0] + " — " + nights.substring(3));
  };

  return (
    <div
      className="flex flex-col items-start justify-start gap-0 w-full
                  600:flex-row 600:items-center 600:gap-5"
    >
      <div className="min-w-[200px] ml-2 600:ml-0">
        <p className="text-gray-500 font-semibold">Количетсво ночей</p>
      </div>
      <div className="flex w-full max-w-xs gap-2 items-center">
        <Select
          id="selectStart"
          className="max-w-[100px]"
          aria-label="Options"
          defaultSelectedKeys={["5"]}
          onChange={(e) => changeStartNights(e.target.value)}
          classNames={{
            trigger: [
              "bg-white border-2 data-[hover=true]:!border-sky-400",
              "data-[hover=true]:bg-white transition shadow-lg",
            ],
            value: [
              "!text-gray-700 text-base font-normal group-data-[has-value=true]:text-base",
              "group-data-[has-value=true]:text-gray-700",
            ],
          }}
        >
          {arrStart.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
        <span> — </span>
        <Select
          id="selectEnd"
          className="max-w-[100px]"
          defaultSelectedKeys={["end10"]}
          onChange={(e) => changeEndNights(e.target.value)}
          aria-label="Options"
          classNames={{
            trigger: [
              "bg-white border-2 data-[hover=true]:!border-sky-400",
              "data-[hover=true]:bg-white transition shadow-lg",
            ],
            value: [
              "!text-gray-700 text-base font-normal group-data-[has-value=true]:text-base",
              "group-data-[has-value=true]:text-gray-700",
            ],
          }}
        >
          {arrEnd.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
