import { useCallback, useState } from "react";

const useChange = () => {
  const [triger, setTigger] = useState<number>(+new Date());

  const toggleTiger = useCallback(() => {
    setTigger(+new Date());
  }, []);

  return { triger, toggleTiger };
};

export default useChange;
