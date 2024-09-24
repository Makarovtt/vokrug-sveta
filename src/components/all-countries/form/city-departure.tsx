import { Select, SelectItem } from "@nextui-org/select";
import { animals } from "../data";
import { ChangeEvent, useState } from "react";

export const CityDeparture = () => {
  const [values, setValues] = useState<any>(new Set([]));
  return (
    <>
      <p className="mt-10 text-gray-600 font-semibold">Город вылета</p>
      <div className="flex w-full max-w-xs flex-col gap-2 mt-3">
        <Select
          selectionMode="multiple"
          placeholder="Выберите город"
          selectedKeys={values}
          aria-label="Options"
          className="max-w-xs"
          onSelectionChange={setValues}
          classNames={{
            mainWrapper: "",
            trigger: [
              "bg-white hover:!bg-white hover:!border-sky-400",
              "!border-slate-300  border-2 h-auto shadow-lg transition",
            ],
            value: [
              "text-gray-400 text-base font-normal group-data-[has-value=true]:text-gray-700",
              "py-2 px-4 group-data-[has-value=true]:text-lg",
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
    </>
  );
};
