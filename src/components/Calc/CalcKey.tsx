import { CSSProperties } from "react";

export type CustomProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

function CalcKey(props: CustomProps) {
  return (
    <>
      <div
        className={props.className}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </>
  );
}
export default CalcKey;
