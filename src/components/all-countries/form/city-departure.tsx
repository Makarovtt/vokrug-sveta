import { Select, SelectItem } from "@nextui-org/select";
import { animals } from "../data";
import { ChangeEvent, FC, memo, useState } from "react";

interface IProps {
  values: any;
  setValues: any;
}

export const CityDeparture: FC<IProps> = memo(function MemoCityDeparture({
  values,
  setValues,
}) {
  return (
    <div
      className="flex flex-col items-start justify-start gap-0 w-full
                  600:flex-row 600:items-center 600:gap-5"
    >
      <div className="min-w-[200px] ml-2 600:ml-0">
        <p className="text-gray-500 font-semibold">Город вылета</p>
        <span className="block text-xs text-gray-500">
          Можно выбрать несколько
        </span>
      </div>
      <div className="flex w-full flex-col gap-2 grow">
        <Select
          selectionMode="multiple"
          placeholder="Выберите город"
          selectedKeys={values}
          aria-label="Options"
          className="max-w-xs"
          onSelectionChange={setValues}
          classNames={{
            mainWrapper: "w-full",
            base: "w-full !max-w-[2000px]",
            innerWrapper: "w-full",
            trigger: [
              "bg-white hover:!bg-white hover:!border-sky-400",
              "!border-slate-300  border-2 h-auto shadow-lg transition",
            ],
            value: [
              "text-gray-400 text-base font-normal group-data-[has-value=true]:text-gray-700",
              "py-2 px-4 group-data-[has-value=true]:text-base",
            ],
          }}
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        {/* <p className="text-small text-default-500 ml-4">
          Города: {Array.from(values).join(", ")}
        </p> */}
      </div>
    </div>
  );
});
