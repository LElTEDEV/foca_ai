import type { ComponentProps } from "react";

type DefaultInputProps = ComponentProps<"input"> & {
  taskTitle: string;
};

export function DefaultInput({ taskTitle, id, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{taskTitle}</label>
      <input
        id={id}
        className="text-center border-b-2 border-t-2 border-t-transparent border-primary p-3 mt-2 focus:border-2 focus:border-primary focus:outline-0 focus:rounded disabled:border-b-2 disabled:border-b-disabled disabled:text-text-muted disabled:cursor-not-allowed"
        {...rest}
      />
    </>
  );
}
