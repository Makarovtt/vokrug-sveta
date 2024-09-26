import { Avatar, Chip } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Plus } from "lucide-react";
import { users } from "../data";
import { FC, useCallback, useState } from "react";

interface IProps {
  setCountries: (arg0: string) => void;
}

export const ChoiceCountries: FC<IProps> = ({ setCountries }) => {
  const funcSetCountries = useCallback(
    (numCountries: string) => {
      const newArr = numCountries.split(",");
      const findCountriesObj = users.filter((item) =>
        newArr.includes(String(item.id)),
      );
      const findCountriesObjNames = findCountriesObj
        .map((i) => i.name)
        .join(",");
      setCountries(findCountriesObjNames);
    },
    [setCountries],
  );

  return (
    <div
      className="flex flex-col items-start justify-start gap-0 w-full
                    600:flex-row 600:items-center 600:gap-5"
    >
      <div className="min-w-[200px] ml-2 600:ml-0">
        <p className="text-gray-500 font-semibold">Добавьте страну</p>
        <span className="block text-xs text-gray-500">
          Можно выбрать несколько
        </span>
      </div>
      <div className="flex w-full flex-col gap-2 grow">
        <Select
          items={users}
          variant="bordered"
          isMultiline={true}
          aria-label="Options"
          selectionMode="multiple"
          placeholder="Страна"
          labelPlacement="outside"
          onChange={(items) => funcSetCountries(items.target.value)}
          selectorIcon={<Plus color="gray" />}
          classNames={{
            base: "!w-full",
            trigger: [
              "py-2 bg-white data-[hover=true]:!border-sky-400",
              "!border-slate-300 data-[hover=true]:!bg-white shadow-lg",
            ],
            label: "!text-gray-200 text-xs",
            value: [
              "text-gray-400 text-base group-data-[has-value=true]:text-gray-700",
              "group-data-[has-value=true]:text-xs px-4",
            ],
          }}
          renderValue={(items) => {
            return (
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip key={item.key} className="bg-sky-100 text-xs">
                    {item?.data?.name}
                  </Chip>
                ))}
              </div>
            );
          }}
        >
          {(user) => (
            <SelectItem
              key={user.id}
              textValue={user.name}
              // onClick={() => setCountries((prev) => [...prev, user.name])}
            >
              <div className="flex gap-2 items-center">
                <Avatar
                  alt={user.name}
                  className="flex-shrink-0"
                  classNames={{}}
                  size="sm"
                  src={user.avatar}
                />
                <div className="flex flex-col">
                  <span className="text-small">{user.name}</span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
    </div>
  );
};
