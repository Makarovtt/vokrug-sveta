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

interface IProps {
  humansQuantity: IHumans;
  changeHumanQuantity: (arg0: string) => void;
}

export const QuantityHumans = ({
  humansQuantity,
  changeHumanQuantity,
}: IProps) => {
  console.log(2);
  return (
    <>
      <p className="mt-10 text-gray-600 font-semibold">Количетсво человек</p>
      <div className="mt-3">
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
                      border-2 border-slate-300 text-lg py-3 px-4 
                      h-auto !max-w-full min-w-[320px] justify-start
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
    </>
  );
};
