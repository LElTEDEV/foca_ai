import type { ComponentProps } from "react";

type DefaultButtonProps = ComponentProps<"button"> & {
  icon: React.ReactNode;
  color?: "green" | "red";
};

export function DefaultButton({
  icon,
  color = "green",
  ...rest
}: DefaultButtonProps) {
  return (
    <button
      className={`flex items-center justify-center min-w-88 p-3 rounded cursor-pointer my-12 hover:brightness-150 transition ease-in ${
        color === "green"
          ? "bg-primary text-text-over-primary"
          : "bg-error text-text-over-error"
      }`}
      {...rest}
    >
      {icon}
    </button>
  );
}
