import type { ComponentProps } from "react";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

type DefaultButtonProps = ComponentProps<"button"> & {
  status?: "play" | "stop";
};

export function DefaultButton({
  status = "play",
  ...rest
}: DefaultButtonProps) {
  return (
    <button
      className={`flex items-center justify-center min-w-88 p-3 rounded cursor-pointer my-12 hover:brightness-150 transition ease-in ${
        status === "play"
          ? "bg-primary text-text-over-primary"
          : "bg-error text-text-over-error"
      }`}
      {...rest}
    >
      {status === "play" ? (
        <PlayCircleIcon size={38} />
      ) : (
        <StopCircleIcon size={38} />
      )}
    </button>
  );
}
