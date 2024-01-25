import { Suspense } from "react";
import { Container } from "../ui/Container";
import classes from "./Header.module.css";
import { Photo, SearchField } from "./SearchField";
import { RadixAriaSwitch } from "./RadixAria";
import { Navigation } from "./Navigation/Navigation";

export const Header = async () => {
  const photos = (await fetch("http://localhost:3000/api/photos").then((res) =>
    res.json()
  )) as Photo[];
  return (
    <header className={classes.header}>
      <Container className={classes.headerInner}>
        <h1 className={classes.title}>UI Test</h1>

        {/* <Navigation /> */}
        <div className={classes.headerLeft}>
          {/* <SearchField initialData={photos} /> */}
          {/* <RadixAriaSwitch /> */}
        </div>
      </Container>
    </header>
  );
};
