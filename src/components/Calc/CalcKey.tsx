import { CustomProps } from "./CalcTypes";

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
