import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      className=" overflow-hidden bg-gray-800 h-12 border focus-within:border-gray-100 border-gray-600 hover:bg-gray-600 transition-all rounded-xl px-4 flex items-center gap-2 group data-[error=true]:border-danger"
      data-error={error}
      {...props}
    ></div>
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input className="flex-1 outline-none placeholder-gray-400" {...props} />
  );
}
