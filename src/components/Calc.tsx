// type props = {
//   children?: React.ReactNode;
// };

import CalcKeys from "./CalcKeys";
import OutputField from "./OutputField";

function Calc() {
  return (
    <>
      <div className="h-screen p-4 text-white calc-wrapper bg-themeonedarkblue">
        <div className="text-4xl font-extrabold logo">calc</div>
        <OutputField className="p-4 text-5xl font-extrabold text-right rounded-md outputfield bg-themeonedarkestblueshadow">
          399,981
        </OutputField>
        <CalcKeys className="grid grid-cols-4 p-4">
          <div className="p-4 shadow-sm text-themeonedarkblueshadow key bg-themeonelightgreyorange shadow-themeonegreyorange">
            <span className="text-3xl font-bold text-themeonedarkblue">
              AC
            </span>
          </div>
        </CalcKeys>
      </div>
    </>
  );
}
export default Calc;
