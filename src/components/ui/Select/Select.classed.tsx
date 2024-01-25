"use client";

import { classed } from "@/utils/classed";
import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Select.module.css";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export const SelectRoot = SelectPrimitive.Root;
export const SelectViewport = SelectPrimitive.Viewport;
export const SelectTrigger = classed(
  SelectPrimitive.Trigger,
  styles.selectTrigger
);
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = classed(SelectPrimitive.Icon, styles.selectIcon);
export const SelectPortal = SelectPrimitive.Portal;
export const SelectGroup = SelectPrimitive.Group;
export const SelectContent = classed(
  SelectPrimitive.Content,
  styles.selectContent
);
export const SelectScrollUpButton = classed(
  SelectPrimitive.ScrollUpButton,
  styles.selectScrollButton
);
export const SelectScrollDownButton = classed(
  SelectPrimitive.ScrollDownButton,
  styles.selectScrollButton
);
export const SelectSeparator = classed(
  SelectPrimitive.Separator,
  styles.selectSeparator
);

// Grouped

export const Select = ({
  children,
  container,
  ...props
}: SelectPrimitive.SelectProps & SelectPrimitive.SelectPortalProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger>
        <SelectValue />
        <SelectIcon>
          <ChevronDownIcon size="14px" />
        </SelectIcon>
      </SelectTrigger>

      <SelectPortal container={container}>
        <SelectContent>
          <SelectViewport>{children}</SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  );
};

export const SelectItemIndicator = classed(
  SelectPrimitive.ItemIndicator,
  styles.selectItemIndicator
);

export const SelectItem = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(function SelectItem({ children, className, ...props }, forwardedRef) {
  return (
    <SelectPrimitive.Item
      className={clsx(styles.selectItem, className)}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectItemIndicator>
        <CheckIcon size="14px" />
      </SelectItemIndicator>
    </SelectPrimitive.Item>
  );
});
