"use client";

import * as React from "react";
import { ru } from "date-fns/locale";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SelectFormData({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 2, 22),
    to: addDays(new Date(2023, 2, 22), 20),
  });
  var options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[400px] flex-wrap h-[56px] justify-start text-left font-normal py-1",
              !date && "text-muted-foreground",
            )}
          >
            <div className="flex justify-start items-center gap-2 text-gray-400 w-full text-xs font-light">
              <CalendarIcon strokeWidth={1} className="mr-2 h-4 w-4" />
              Даты отъезда
            </div>

            {date?.from ? (
              date.to ? (
                <span className="font-semibold">
                  {date.from.toLocaleString("ru", options)} -{" "}
                  {date.to.toLocaleString("ru", options)}
                </span>
              ) : (
                format(date.from, "dd LLL y")
              )
            ) : (
              <span>Даты отъезда</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={ru}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
