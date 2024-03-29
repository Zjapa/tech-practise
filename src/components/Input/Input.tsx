import React, { ComponentPropsWithoutRef } from "react";
import { StyledInput } from "./Input.styled";

interface inputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  // handleChange: (event: React.MouseEvent<HTMLInputElement>) => void
}

const Input = (props: inputProps): React.JSX.Element => {
  const { label, ...restProps } = props;
  return (
    <label>
      {label}
      <StyledInput {...restProps} />
    </label>
  );
};

export default Input;
