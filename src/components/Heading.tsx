import type { ComponentProps, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
} & ComponentProps<"header">;

export function Heading({ children, ...rest }: HeadingProps) {
  return <header {...rest}>{children}</header>;
}
