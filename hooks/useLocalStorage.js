import { useEffect, useRef, useState } from "react";
import { localStorageClient } from "../utils/";

const lcStorage = localStorageClient();

export const useLocalStorage = (
  key,
  defaultValue,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = useState(() => {
    try {
      const valueInLocalStorage = lcStorage.getItem(key);
      const deserializedValue = deserialize(valueInLocalStorage);
      if (!deserializedValue) {
        return typeof defaultValue === "function"
          ? defaultValue()
          : defaultValue;
      }
      return deserializedValue;
    } catch (e) {
      lcStorage.removeItem(key);
    }
  });

  const prevKeyRef = useRef(null);

  useEffect(() => {
    if (key !== prevKeyRef.current) {
      lcStorage.removeItem(key);
    }
    prevKeyRef.current = key;
    lcStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};
