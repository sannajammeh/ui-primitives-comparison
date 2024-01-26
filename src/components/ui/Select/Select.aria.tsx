import { classed } from "@/utils/classed";
import {
  Select as SelectAria,
  Label,
  Popover,
  SelectValue,
  ListBox,
  ListBoxItem,
  Button,
  SelectProps,
} from "react-aria-components";
import styles from "./Select.module.css";
import { ChevronDownIcon } from "lucide-react";
import clsx from "clsx";

export const SelectButton = classed(Button, styles.selectTrigger);
export const SelectItem = classed(ListBoxItem, styles.selectItem);
export const SelectContent = classed(
  ListBox,
  styles.selectContent,
  styles.selectViewport
);

export const Select = ({
  container,
  children,
  ...props
}: React.ComponentProps<typeof SelectAria> & {
  container?: HTMLElement;
  children?: React.ComponentProps<typeof SelectItem>["children"];
}) => {
  return (
    <SelectAria {...props}>
      <SelectButton>
        <SelectValue />
        <span aria-hidden="true">
          <ChevronDownIcon size="14px" />
        </span>
      </SelectButton>
      <Popover UNSTABLE_portalContainer={container}>
        <ListBox className={clsx(styles.selectContent, styles.selectViewport)}>
          {children}
        </ListBox>
      </Popover>
    </SelectAria>
  );
};
