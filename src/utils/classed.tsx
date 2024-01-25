import { JSXElementConstructor, forwardRef } from "react";

const merge = (arr: string[]) => arr.filter(Boolean).join(" ");

/**
 * Creates a a wrapper of the provided element and attaches
 * the classNames provided.
 * Provides full typescript support
 */
export function classed<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>(Component: T, ...classNames: string[]) {
  const Inner = forwardRef<React.ElementRef<T>, React.ComponentProps<T>>(
    ({ className, ...props }, ref) => {
      return (
        <Component
          className={merge([className, ...classNames])}
          {...(props as any)}
          ref={ref}
        />
      );
    }
  );

  Inner.displayName =
    (Component as any).displayName ||
    (Component as any).name ||
    (typeof Component === "string" ? Component : "ClassedComponent");

  return Inner;
}
