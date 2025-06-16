import { useCallback, useRef } from "react";

export function useFocus() {
  const inputRef = useRef(null);

  const setFocus = useCallback(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return [inputRef, setFocus];
}
