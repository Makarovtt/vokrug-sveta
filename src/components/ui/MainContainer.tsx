import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const MainContainer: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full max-w-maxw mx-auto my-10 px-2 500:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
