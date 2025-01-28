import { useEffect, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";

function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => getItem(key) || initialValue);

  useEffect(() => {
    setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

export default usePersistedState;
