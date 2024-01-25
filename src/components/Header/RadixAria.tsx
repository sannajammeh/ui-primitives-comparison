"use client";

import { create } from "zustand";
import { Switch } from "react-aria-components";
import classes from "./Header.module.css";

interface UseRadixStore {
  isRadix: boolean;
  toggleRadix: () => void;
  setIsRadix: (isRadix: boolean) => void;
}

export const useRadix = create<UseRadixStore>((set) => ({
  isRadix: false,
  setIsRadix: (isRadix: boolean) => set({ isRadix }),
  toggleRadix: () =>
    set((state: { isRadix: boolean }) => ({ isRadix: !state.isRadix })),
}));

export const RadixAriaSwitch = () => {
  const { isRadix, setIsRadix } = useRadix();
  return (
    <Switch
      isSelected={isRadix}
      onChange={setIsRadix}
      className={classes.radixSwitch}
    >
      <div className={classes.indicator}></div>
      <span className={classes.indicatorText}>Use radix</span>
    </Switch>
  );
};
