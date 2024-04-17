// type props = {
//   children?: React.ReactNode;
// };

import CalcKeys from "./CalcKeys";
import CalcNumberKey from "./CalcNumberKey";
import OutputField from "./OutputField";

function Calc() {
  return (
    <>
      <div className="h-screen p-4 text-white calc-wrapper bg-themeonedarkblue">
        <div className="text-4xl font-extrabold logo">calc</div>
        <OutputField className="p-4 text-5xl font-extrabold text-right rounded-md outputfield bg-themeonedarkestblueshadow">
          399,981
        </OutputField>
        <div className="p-4 mt-4 rounded-md calcwrapper bg-themeonedarkblueshadow">
          <CalcKeys className="grid grid-cols-4 gap-3">
            <CalcNumberKey name={7} />
            <CalcNumberKey name={8} />
            <CalcNumberKey name={9} />
            <CalcNumberKey name={"Del"} />
            <CalcNumberKey name={4} />
            <CalcNumberKey name={5} />
            <CalcNumberKey name={6} />
            <CalcNumberKey name={"+"} />
            <CalcNumberKey name={1} />
            <CalcNumberKey name={2} />
            <CalcNumberKey name={3} />
            <CalcNumberKey name={"-"} />
            <CalcNumberKey name={"."} />
            <CalcNumberKey name={0} />
            <CalcNumberKey name={"/"} />
            <CalcNumberKey name={"x"} />
            <CalcNumberKey name={"Reset"} />
            <CalcNumberKey name={"="} />
          </CalcKeys>
        </div>
      </div>
    </>
  );
}
export default Calc;
