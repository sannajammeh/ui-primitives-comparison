"use client";
import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const router = useRouter();
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
};

export default Providers;
