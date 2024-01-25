"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";
import { forwardRef } from "react";
import classes from "./Select.module.css";
import { CheckIcon } from "lucide-react";
export const SelectRoot = SelectPrimitive.Root;

export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  SelectPrimitive.SelectTriggerProps
>(function SelectTrigger({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Trigger
      className={clsx(classes.selectTrigger, className)}
      {...props}
      ref={ref}
    />
  );
});

export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = forwardRef<
  HTMLSpanElement,
  SelectPrimitive.SelectIconProps
>(function SelectIcon({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Icon
      className={clsx(classes.selectIcon, className)}
      {...props}
      ref={ref}
    />
  );
});

export const SelectPortal = SelectPrimitive.Portal;
export const SelectContent = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectContentProps
>(function SelectContent({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Content
      className={clsx(classes.selectContent, className)}
      {...props}
      ref={ref}
    />
  );
});

export const SelectScrollUpButton = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectScrollUpButtonProps
>(function SelectScrollUpButton({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={clsx(classes.selectScrollButton, className)}
      {...props}
      ref={ref}
    />
  );
});

export const SelectScrollDownButton = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectScrollUpButtonProps
>(function SelectScrollUpButton({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={clsx(classes.selectScrollButton, className)}
      {...props}
      ref={ref}
    />
  );
});

export const SelectSeparator = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectSeparatorProps
>(function SelectSeparator({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Separator
      className={clsx(classes.selectSeparator, className)}
      {...props}
      ref={ref}
    />
  );
});

export const SelectOption = forwardRef<
  HTMLDivElement,
  SelectPrimitive.SelectItemProps
>(function SelectItem({ children, className, ...props }, forwardedRef) {
  return (
    <SelectPrimitive.Item
      className={clsx(classes.selectItem, className)}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={classes.selectItemIndicator}>
        <CheckIcon size="14px" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});
