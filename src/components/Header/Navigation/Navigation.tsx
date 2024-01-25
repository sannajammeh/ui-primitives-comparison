"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { forwardRef } from "react";
import classes from "./Navigation.module.css";

type Props = {};

export const Navigation = ({}: Props) => {
  return (
    <NavigationMenu.Root
      value={"xAD"}
      onValueChange={(v) => console.log(v)}
      className={classes.NavigationMenuRoot}
    >
      <NavigationMenu.List className={classes.NavigationMenuList}>
        <NavigationMenu.Item value="xAD">
          <NavigationMenu.Trigger className={classes.NavigationMenuTrigger}>
            Learn <ChevronDownIcon className={classes.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={classes.NavigationMenuContent}>
            <ul className={clsx(classes.List, classes.one)}>
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <a className={classes.Callout} href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className={classes.CalloutHeading}>
                      Radix Primitives
                    </div>
                    <p className={classes.CalloutText}>
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={classes.NavigationMenuTrigger}>
            Overview{" "}
            <ChevronDownIcon className={classes.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={classes.NavigationMenuContent}>
            <ul className={clsx(classes.List, classes.two)}>
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={classes.NavigationMenuLink}
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={classes.NavigationMenuIndicator}>
          <div className={classes.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={classes.ViewportPosition}>
        <NavigationMenu.Viewport className={classes.NavigationMenuViewport} />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={clsx(classes.ListItemLink, className)}
          {...props}
          ref={forwardedRef}
        >
          <div className={classes.ListItemHeading}>{title}</div>
          <p className={classes.ListItemText}>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";
