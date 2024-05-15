// type props = {
//   children?: React.ReactNode;
// };

import { useState } from "react";
import CalcKey from "./CalcKey";
import CalcNumberKey from "./CalcNumberKey";
import Keypad from "./KeyPad";
import OutputField from "./OutputField";

function Calc() {
  const [theme, setTheme] = useState(1);

  const increment = () => {
    if (theme >= 3) {
      setTheme(1);
      return;
    }
    setTheme(theme + 1);
  };

  return (
    <>
      <div className="h-screen p-6 text-white calc-wrapper bg-themeone-key-shadow">
        <div className="flex justify-between logo-wrapper">
          <div className="py-6 text-4xl font-bold">calc</div>
          <div className="w-1/2 py-6 text-xl font-extrabold">
            <div className="flex flex-wrap">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <div className="flex justify-between px-2 py-1 text-sm">
                  <div className="w-4 h-4 text-center">1</div>
                  <div className="w-4 h-4 text-center">2</div>
                  <div className="w-4 h-4 text-center">3</div>
                </div>
              </div>
              <div className="w-1/2 text-sm uppercase">theme</div>
              <div className="w-1/2">
                <div
                  className={`flex ${theme === 1 ? "justify-start" : ""} ${
                    theme === 2 ? "justify-center" : ""
                  } ${
                    theme === 3 ? "justify-end" : ""
                  } w-full bg-themeone-toggle-background p-2 rounded-full cursor-pointer`}
                  onClick={increment}
                >
                  <div className="w-4 h-4 rounded-full bg-themeone-red shadow-themeone-key-shadow">
                    {/* {theme} */}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <OutputField className="p-6 text-4xl font-extrabold text-right rounded-md outputfield bg-themeone-screen-background">
          399,981
        </OutputField>

        <div className="p-4 mt-4 rounded-md shadow-sm calcwrapper bg-themeone-toggle-background shadow-themeone-key-background">
          <Keypad className="grid grid-cols-4 gap-3 p-3">
            <CalcNumberKey name={7} />
            <CalcNumberKey name={8} />
            <CalcNumberKey name={9} />
            <CalcKey className="flex items-center justify-center text-xl text-center rounded-md shadow-sm bg-themeone-key-background key shadow-themeonedarkblueshadow ">
              <span className="font-bold uppercase">Del</span>
            </CalcKey>
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

            <CalcKey className="col-span-2 p-4 text-xl text-center rounded-md shadow-sm bg-themeonedarkblue shadow-themeone-key-shadow bg-themeone-key-background">
              <span className="font-bold uppercase">Reset</span>
            </CalcKey>

            <CalcKey className="col-span-2 p-4 text-center rounded-md shadow-sm bg-themeone-red key shadow-themeone-dark-red">
              <span className="font-bold uppercase">=</span>
            </CalcKey>
          </Keypad>
        </div>
      </div>
    </>
  );
}
export default Calc;
