import { Input } from "@nextui-org/react";

export const NameUser = () => {
  return (
    <>
      <p className="mt-10 text-gray-600 font-semibold">Ваше имя</p>
      <div className="flex w-full max-w-xs gap-2 mt-3 items-center">
        <Input
          placeholder="имя"
          classNames={{
            inputWrapper: [
              "py-3 px-4 h-auto w-auto min-w-[310px] max-w-[310px] border-2 border-slate-300",
              "shadow-lg bg-white hover:!bg-white hover:!border-sky-400",
            ],
            input: "text-lg text-gray-700",
          }}
        />
      </div>
    </>
  );
};
