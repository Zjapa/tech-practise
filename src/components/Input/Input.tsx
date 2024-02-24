import React, { ComponentPropsWithoutRef } from "react";

interface inputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const Input = (props: inputProps): React.JSX.Element => {
  const { label, ...restProps } = props;
  return (
    <label>
      {label}
      <input {...restProps} />
    </label>
  );
};

export default Input;
