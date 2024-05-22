import { CustomProps } from "../calc/CalcTypes";

function ToggleCol(props: CustomProps) {
  return (
    <>
      <div className="w-1/2">{props.children}</div>
    </>
  );
}
export default ToggleCol;
