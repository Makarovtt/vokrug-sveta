import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bus, Clock, MapPin, PersonStanding, Users } from "lucide-react";
import { Button } from "../ui/button";
import { SelectFormData } from "../banner-main/form-select-data";
import { Avatar, Chip } from "@nextui-org/react";
import { users } from "./data";
import { useState } from "react";

export const Form = () => {
  const [values, setValues] = useState(new Set([]));
  const handleSelectionChange = (e) => {
    console.log("e");
    setValues(new Set(e.target.value.split(",")));
  };
  return (
    <div
      className="bg-slate-50 border border-slate-200 shadow
                   rounded-lg max-w-[800px] mx-auto my-14 py-10  px-8"
    >
      <div className="flex flex-col justify-between items-center max-w-[800px] mx-auto mt-auto mb-8 gap-8">
        <div>
          <Select
            onSelectionChange={() => console.log("e")}
            selectionMode="multiple"
            selectedKeys={values}
            label="Favorite Animal"
          >
            <SelectTrigger className="w-[400px] flex-wrap h-[56px] py-1 px-3 text-base font-semibold">
              <div className="flex justify-start items-center gap-2 text-gray-400 w-full text-xs font-light">
                <Bus strokeWidth={1} className="h-4" />
                Отправление
              </div>
              <SelectValue placeholder="Выбрать" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="astra" value="1">
                Астрахань
              </SelectItem>
              <SelectItem key="vlgr" value="2">
                Волгоград
              </SelectItem>
              <SelectItem key="moskow" value="3">
                Москва
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[400px] flex-wrap h-[56px] py-1 px-3 text-base font-semibold">
              <div className="flex justify-start items-center gap-2 text-gray-400 w-full text-xs font-light">
                <MapPin strokeWidth={1} className="h-4" />
                Страна
              </div>
              <SelectValue placeholder="Выбрать" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Адлер</SelectItem>
              <SelectItem value="dark">Сочи</SelectItem>
              <SelectItem value="system">Геленджик</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <SelectFormData />
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[400px] flex-wrap h-[56px] py-1 px-3 text-base font-semibold">
              <div className="flex justify-start items-center gap-2 text-gray-400 w-full text-xs font-light">
                <Clock strokeWidth={1} className="h-4" />
                Кол-во ночей
              </div>
              <SelectValue placeholder="Выбрать" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[400px] flex-wrap h-[56px] py-1 px-3 text-base font-semibold">
              <div className="flex justify-start items-center gap-2 text-gray-400 w-full text-xs font-light">
                <Users strokeWidth={1} className="h-4" />
                Туристы
              </div>
              <SelectValue placeholder="Выбрать" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button
            className="w-[400px] flex justify-center items-center h-[56px] py-1 px-3 text-base font-semibold
        border border-white bg-[#0F5B8E] hover:bg-[#0D4870] transition-all"
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
