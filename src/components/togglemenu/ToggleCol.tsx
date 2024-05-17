import { CustomProps } from "../Calc";

function ToggleCol(props: CustomProps) {
  return (
    <>
      <div className="w-1/2 h-4">{props.children}</div>
    </>
  );
}
export default ToggleCol;
