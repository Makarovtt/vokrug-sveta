import { Select, SelectItem } from "@nextui-org/select";

export const QuantityNights = () => {
  return (
    <>
      <p className="mt-10 text-gray-600 font-semibold">Количетсво ночей</p>
      <div className="flex w-full max-w-xs gap-2 mt-3 items-center">
        <Select
          className="max-w-[100px]"
          aria-label="Options"
          defaultSelectedKeys={["5"]}
          classNames={{
            trigger: [
              "bg-white border-2 data-[hover=true]:!border-sky-400",
              "data-[hover=true]:bg-white transition shadow-lg",
            ],
            value: [
              "!text-gray-700 text-base font-normal group-data-[has-value=true]:text-lg",
              "group-data-[has-value=true]:text-gray-700",
            ],
          }}
        >
          <SelectItem key={3}>3</SelectItem>
          <SelectItem key={4}>4</SelectItem>
          <SelectItem key={5}>5</SelectItem>
          <SelectItem key={6}>6</SelectItem>
          <SelectItem key={7}>7</SelectItem>
          <SelectItem key={8}>8</SelectItem>
          <SelectItem key={9}>9</SelectItem>
          <SelectItem key={10}>10</SelectItem>
        </Select>
        <span> — </span>
        <Select
          className="max-w-[100px]"
          defaultSelectedKeys={["7"]}
          aria-label="Options"
          classNames={{
            trigger: [
              "bg-white border-2 data-[hover=true]:!border-sky-400",
              "data-[hover=true]:bg-white transition shadow-lg",
            ],
            value: [
              "!text-gray-700 text-base font-normal group-data-[has-value=true]:text-lg",
              "group-data-[has-value=true]:text-gray-700",
            ],
          }}
        >
          <SelectItem key={3}>3</SelectItem>
          <SelectItem key={4}>4</SelectItem>
          <SelectItem key={5}>5</SelectItem>
          <SelectItem key={6}>6</SelectItem>
          <SelectItem key={7}>7</SelectItem>
          <SelectItem key={8}>8</SelectItem>
          <SelectItem key={9}>9</SelectItem>
          <SelectItem key={10}>10</SelectItem>
        </Select>
      </div>
    </>
  );
};
