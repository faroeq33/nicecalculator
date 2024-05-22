import { CustomProps } from "./CalcTypes";

function CalcButton(props: CustomProps) {
  return (
    <>
      <button
        className={props.className}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}
export default CalcButton;
