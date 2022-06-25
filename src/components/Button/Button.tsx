import React from "react";

interface Props {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  testId?: string;
}

export const Button = (props: Props) => {
  const { label, type = "button", onClick, testId } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className="button"
      data-testid={testId}
    >
      {label}
    </button>
  );
};
