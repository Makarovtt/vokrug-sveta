import {
  Button,
  ButtonGroup,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { IHumans } from "../form.interface";
import { useCallback } from "react";

interface IProps {
  humansQuantity: IHumans;
  setHumanQuantity: (arg0: IHumans) => void;
}

export const QuantityHumans = ({
  humansQuantity,
  setHumanQuantity,
}: IProps) => {
  const changeHumanQuantity = useCallback(
    (action: string) => {
      switch (action) {
        case "addHuman":
          const newArr = {
            ...humansQuantity,
            humans: humansQuantity.humans + 1,
          };
          setHumanQuantity(newArr);
          break;

        case "delHuman":
          if (humansQuantity.humans > 1) {
            const newArr = {
              ...humansQuantity,
              humans: humansQuantity.humans - 1,
            };
            setHumanQuantity(newArr);
          }
          break;

        case "addKid":
          const newKid = {
            ...humansQuantity,
            kids: humansQuantity.kids + 1,
          };
          setHumanQuantity(newKid);
          break;

        case "delKid":
          if (humansQuantity.kids > 0) {
            const newKid = {
              ...humansQuantity,
              kids: humansQuantity.kids - 1,
            };
            setHumanQuantity(newKid);
          }
          break;
      }
    },
    [humansQuantity, setHumanQuantity],
  );

  return (
    <div
      className="flex flex-col items-start justify-start gap-0 w-full
                  600:flex-row 600:items-center 600:gap-5"
    >
      <div className="min-w-[200px] ml-2 600:ml-0">
        <p className="text-gray-500 font-semibold">Количетсво человек</p>
      </div>
      <div className="flex w-full flex-col gap-2 grow">
        <Popover
          placement="bottom-start"
          aria-label="Options"
          classNames={{
            base: "bg-white shadow-lg",
          }}
        >
          <PopoverTrigger>
            <Button
              color="secondary"
              variant="flat"
              className="capitalize bg-white text-gray-700 shadow-lg 
                      border-2 border-slate-300 text-base py-2 
                      h-auto !max-w-[2000px] min-w-[270px] w-full justify-start
                      hover:border-sky-400 transition"
            >
              {humansQuantity.humans >= 1 ? (
                <span className=" lowercase">
                  {humansQuantity.humans} взр
                  {humansQuantity.kids > 0 ? (
                    <span>, {humansQuantity.kids} дет</span>
                  ) : null}
                </span>
              ) : null}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-sm  text-gray-700 flex items-center gap-4 justify-between my-4">
                <div className="w-3/5">Количество взрослых</div>
                <ButtonGroup className="w-2/5">
                  <Button
                    size="sm"
                    isIconOnly
                    onClick={() => changeHumanQuantity("delHuman")}
                  >
                    <Minus />
                  </Button>
                  <Input
                    type="text"
                    radius="none"
                    value={String(humansQuantity.humans)}
                    size="sm"
                    classNames={{
                      input: "text-center text-lg text-gray-700",
                    }}
                  />
                  <Button
                    size="sm"
                    isIconOnly
                    onClick={() => changeHumanQuantity("addHuman")}
                  >
                    <Plus />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="text-sm  text-gray-700 flex items-center gap-4 justify-between my-4">
                <div className="w-3/5">Количество детей до 3х лет</div>
                <ButtonGroup className="w-2/5">
                  <Button
                    size="sm"
                    isIconOnly
                    onClick={() => changeHumanQuantity("delKid")}
                  >
                    <Minus />
                  </Button>
                  <Input
                    size="sm"
                    type="text"
                    radius="none"
                    value={String(humansQuantity.kids)}
                    classNames={{
                      input: "text-center text-lg text-gray-700",
                    }}
                  />
                  <Button
                    size="sm"
                    isIconOnly
                    onClick={() => changeHumanQuantity("addKid")}
                  >
                    <Plus />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
