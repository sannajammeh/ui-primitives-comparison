"use client";

import { Slot } from "@radix-ui/react-slot";
import { useEffect, useRef, useState } from "react";
import { Select, SelectItem } from "../ui/Select/Select.classed";
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
        <div style={{ width: 250 }}>
          <h2>Select user</h2>

          <Select container={dialogRef.current} defaultValue="1">
            <SelectItem value="1">Sanna</SelectItem>
            <SelectItem value="2">Filip</SelectItem>
            <SelectItem value="3">Alex</SelectItem>
            <SelectItem value="4">Kjetil</SelectItem>
          </Select>

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
