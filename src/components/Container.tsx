import type { ComponentProps, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
} & ComponentProps<"div">;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <div className="p-6">{children}</div>
    </div>
  );
}
