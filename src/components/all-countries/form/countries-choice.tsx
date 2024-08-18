import { Avatar, Chip } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Plus } from "lucide-react";
import { users } from "../data";

export const ChoiceCountries = () => {
  return (
    <>
      <p className="mt-10 text-gray-600 font-semibold">Добавьте страну</p>
      <span className="block text-xs text-gray-500">
        Можно выбрать несколько
      </span>
      <div className="flex w-full max-w-xs flex-col gap-2 mt-3">
        <Select
          items={users}
          variant="bordered"
          isMultiline={true}
          aria-label="Options"
          selectionMode="multiple"
          placeholder="Страна"
          labelPlacement="outside"
          className="w-[500px]"
          selectorIcon={<Plus color="gray" />}
          classNames={{
            base: "max-w-[600px]",
            trigger: [
              "py-3 bg-white data-[hover=true]:!border-sky-400",
              "!border-slate-300 data-[hover=true]:!bg-white shadow-lg",
            ],
            label: "!text-gray-200 text-sm",
            value: [
              "text-gray-400 text-base group-data-[has-value=true]:text-gray-700",
              "group-data-[has-value=true]:text-lg px-4",
            ],
          }}
          renderValue={(items) => {
            return (
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip key={item.key} className="bg-sky-100">
                    {item?.data?.name}
                  </Chip>
                ))}
              </div>
            );
          }}
        >
          {(user) => (
            <SelectItem key={user.id} textValue={user.name}>
              <div className="flex gap-2 items-center">
                <Avatar
                  alt={user.name}
                  className="flex-shrink-0"
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
    </>
  );
};
