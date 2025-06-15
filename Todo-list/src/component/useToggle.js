import { useState } from "react";

// useToggle as a custom hook for toggle the darkMode
export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((currentValue) => !currentValue);
  }
  return [value, toggle];
}
