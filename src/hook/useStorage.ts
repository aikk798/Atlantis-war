import { useState } from "react";

function useLocalStorage(key: string) {
  const isClient = typeof window !== "undefined";

  const initialValue = isClient ? localStorage.getItem(key) || "" : "";

  const [value, setValue] = useState<string>(initialValue);

  const setLocalStorageValue = (newValue: any) => {
    setValue(newValue);
    if (isClient) {
      localStorage.setItem(key, newValue);
    }
  };

  return [value, setLocalStorageValue] as const;
}

export default useLocalStorage;
