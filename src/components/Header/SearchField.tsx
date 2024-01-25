"use client";
import { ChevronDownIcon } from "lucide-react";
import React, { use } from "react";
import {
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Button,
  Group,
} from "react-aria-components";
import classes from "./Header.module.css";
import Image from "next/image";

export interface Photo {
  id: string;
  title: string;
  url: string;
}

export const SearchField = ({ initialData }: { initialData: Photo[] }) => {
  const photos = initialData;

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form>
      <ComboBox
        allowsCustomValue
        className={classes.searchField}
        aria-labelledby="search"
        onInputChange={console.log}
      >
        <Group className={classes.inputGroup}>
          <Input
            name="search-term"
            type="search"
            placeholder="Search here..."
          />
          <Button>
            <ChevronDownIcon size="14px" />
          </Button>
        </Group>
        <Popover>
          <ListBox className={classes.listBox}>
            {photos.map((photo) => (
              <ListBoxItem
                href={`/${photo.id}`}
                key={photo.id}
                id={photo.id}
                value={photo}
                className={classes.item}
                textValue={String(photo.title)}
              >
                <Image
                  className={classes.itemImg}
                  width={56}
                  height={56}
                  src={photo.url}
                  alt={photo.title}
                />
                <div>
                  <div className={classes.title}>{photo.title}</div>
                  <div className={classes.subtitle}>id: {photo.id}</div>
                </div>
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>
    </form>
  );
};
