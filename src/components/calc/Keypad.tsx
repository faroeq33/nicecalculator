import { CustomProps } from "./CalcTypes";

function Keypad(props: CustomProps) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
}
export default Keypad;
