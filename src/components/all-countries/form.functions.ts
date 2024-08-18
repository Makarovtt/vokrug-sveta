import { useState } from "react";
import { IHumans } from "./form.interface";

export function useAddHumanQuantity() {
  const [humansQuantity, setHumanQuantity] = useState<IHumans>({
    humans: 1,
    kids: 0,
  });
  setHumanQuantity((prev) => {
    return { ...humansQuantity, humans: prev.humans + 1 };
  });
}
