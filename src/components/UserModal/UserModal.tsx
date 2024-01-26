"use client";

import { Slot } from "@radix-ui/react-slot";
import { useEffect, useRef, useState } from "react";
import { NativeSelect, Select, SelectItem } from "../ui/Select/Select.classed";
import * as Aria from "../ui/Select/Select.aria";
import styles from "./UserModal.module.css";
import { Button } from "../ui/Button";
export interface UserModalProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const UserModal = ({ children, asChild }: UserModalProps) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null!);
  const Component = asChild ? Slot : "button";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = dialogRef.current.getBoundingClientRect();

    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      handleClose();
    }
  };

  return (
    <>
      <Component onClick={handleOpen}>{children}</Component>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={handleBackdropClick}
      >
        <div className={styles.content} style={{ width: 250 }}>
          <h2>Select user</h2>
          <div>
            <label htmlFor="select-1">Classed Select</label>
            <Select
              id="select-1"
              container={dialogRef.current}
              defaultValue="1"
            >
              <SelectItem value="1">Sanna</SelectItem>
              <SelectItem value="2">Filip</SelectItem>
              <SelectItem value="3">Alex</SelectItem>
              <SelectItem value="4">Kjetil</SelectItem>
              <SelectItem value="5">Poul</SelectItem>
            </Select>
          </div>

          <div>
            <label htmlFor="default-select">Default Select</label>
            <NativeSelect name="default-select" id="default-select">
              <option value="1">Sanna</option>
              <option value="2">Filip</option>
              <option value="3">Alex</option>
              <option value="4">Kjetil</option>
              <option value="5">Poul</option>
            </NativeSelect>
          </div>

          <div>
            <label htmlFor="aria-select">Default Select</label>
            <Aria.Select container={dialogRef.current} id={"aria-select"}>
              <Aria.SelectItem>Sanna</Aria.SelectItem>
              <Aria.SelectItem>Filip</Aria.SelectItem>
              <Aria.SelectItem>Alex</Aria.SelectItem>
              <Aria.SelectItem>Kjetil</Aria.SelectItem>
              <Aria.SelectItem>Poul</Aria.SelectItem>
            </Aria.Select>
          </div>

          <div>
            <br />
            <Button onClick={handleClose}>Close</Button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UserModal;
