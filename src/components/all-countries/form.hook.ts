import { useState } from "react";
import { IHumans } from "./form.interface";

function useChangeHumans(initialValue) {
  const [value, setValue] = useState<IHumans>({
    humans: 1,
    kids: 0,
  });
  function handleChange(e) {
    setValue(e.target.value);
  }
  return [value, handleChange];
}

export default useChangeHumans;
