import { Button } from "@nextui-org/react";

export const SubmitBtn = () => {
  return (
    <>
      <div className="flex w-full gap-2 items-center justify-end mt-10">
        <Button color="primary" className="font-semibold text-lg">
          Отправить
        </Button>
      </div>
    </>
  );
};
