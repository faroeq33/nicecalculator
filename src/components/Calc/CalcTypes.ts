import { CSSProperties } from "react";

export type CustomProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export type CalcState = {
  currentOperand: string | null;
  previousOperand: string | null;
  operation: string | null;
  overwrite: boolean;
};
