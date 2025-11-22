import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="p-12">{children}</div>
    </div>
  );
}
