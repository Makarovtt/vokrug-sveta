import { cn } from "@/lib/utils";
import { Spinner } from "@nextui-org/react";
import { FC } from "react";

interface IProps {
  className?: string;
}

export const Loader: FC<IProps> = ({ className }) => {
  return (
    <div className={cn("h-32 flex items-center justify-center", className)}>
      <Spinner label="Загрузка" color="primary" labelColor="primary" />
    </div>
  );
};
