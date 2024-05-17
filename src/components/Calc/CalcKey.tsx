import { CSSProperties } from "react";

export type CustomProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

function CalcKey(props: CustomProps) {
  return (
    <>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </>
  );
}
export default CalcKey;
