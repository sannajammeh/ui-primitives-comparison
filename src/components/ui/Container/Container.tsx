import clsx from "clsx";
import classes from "./Container.module.css";
type Props = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export const Container = ({ children, className, ...props }: Props) => {
  return (
    <div {...props} className={clsx(className, classes.container)}>
      {children}
    </div>
  );
};
