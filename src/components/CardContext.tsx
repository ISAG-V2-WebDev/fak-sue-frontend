import { createContext } from 'react';

export const CardContext = createContext({
  isFull: false,
  setIsFull: (value: boolean) => {},
});
