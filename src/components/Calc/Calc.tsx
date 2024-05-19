// type props = {
//   children?: React.ReactNode;
// };

import ScreenBackground from "../ScreenBackground";
import ToggleNumber from "../togglemenu/ToggleNumber";
import ToggleCol from "../togglemenu/ToggleCol";
import ToggleButton from "../togglemenu/ToggleButton";
import { useThemeContext } from "../../context/useThemeContext";
import NumberKey from "./NumberKey";
import CalcKey, { CustomProps } from "./CalcKey";
import { CSSProperties, useState } from "react";
import { shadowValue, themeColors } from "../themeColors";

function Calc() {
  const { theme } = useThemeContext();

  const [result, setResult] = useState<number>(0);
  const [screen, setScreen] = useState<string>(``);
  // Define the event handlers for each action

  const handleReset = () => {
    if (screen === ``) return;
    setScreen(``);
    setResult(0);
  };

  const handleCalculation = (num: number) => {
    if (result === 0) {
      setScreen(`${num}`);
      return;
    }
    setScreen(`${result}${num}`);
  };
  const handleScreen = () => {
    setScreen(`${result} + `);
  };

  const textSwitch = () => {
    if (theme === 2) {
      return themeColors[2].text.lightYellow;
    }
    if (theme === 1) {
      return themeColors[1].text.veryDarkGrayishBlue;
    }
    if (theme === 0) {
      return themeColors[0].text.white;
    }
    return "";
  };

  const textColor: CSSProperties = {
    color: textSwitch(),
  };

  // for reset and delete buttons
  const tertiaryColor: CSSProperties = {
    background: themeColors[theme].myKeys.tertiaryKey.keyBackground,
    boxShadow: themeColors[theme].myKeys.tertiaryKey.keyShadow,
  };

  return (
    <>
      <div
        className="h-screen p-6 calc-wrapper"
        style={{
          background: themeColors[theme]?.backgrounds.mainBackground,
          ...textColor,
        }}
      >
        <div className="flex justify-between logo-wrapper">
          <p className="py-6 text-4xl font-bold" style={{ ...textColor }}>
            calc
          </p>
          <div className="w-1/2 pb-6 text-xl font-extrabold">
            <div className="flex flex-wrap items-center">
              <ToggleCol></ToggleCol>
              <ToggleCol>
                <div className="flex justify-between px-2 py-1 text-sm">
                  <ToggleNumber number={1} />
                  <ToggleNumber number={2} />
                  <ToggleNumber number={3} />
                </div>
              </ToggleCol>
              <ToggleCol>
                <span className="h-4 text-xs text-right uppercase">theme</span>
              </ToggleCol>
              <ToggleCol>
                <ToggleButton />
              </ToggleCol>
            </div>
          </div>
        </div>

        <ScreenBackground
          className="p-6 text-4xl font-extrabold text-right rounded-md outputfield "
          style={{
            background: themeColors[theme]?.backgrounds.screenBackground,
            ...textColor,
          }}
        >
          {screen}
        </ScreenBackground>

        <div
          className="p-4 mt-4 rounded-md calcwrapper"
          style={{
            background: themeColors[theme].backgrounds.toggleBackground,
          }}
        >
          <Keypad className="grid grid-cols-4 gap-3 p-3">
            <NumberKey number={7} onClick={() => handleCalculation(7)} />
            <NumberKey number={8} onClick={() => handleCalculation(8)} />
            <NumberKey number={9} onClick={() => handleCalculation(9)} />
            <CalcKey
              className="flex items-center justify-center text-xl text-center text-white rounded-md"
              style={tertiaryColor}
            >
              <span className="font-bold uppercase">Del</span>
            </CalcKey>
            <NumberKey number={4} onClick={() => handleCalculation(4)} />
            <NumberKey number={5} onClick={() => handleCalculation(5)} />
            <NumberKey number={6} onClick={() => handleCalculation(6)} />
            <NumberKey number={"+"} onClick={handleScreen} />
            <NumberKey number={1} onClick={() => handleCalculation(1)} />
            <NumberKey number={2} onClick={() => handleCalculation(2)} />
            <NumberKey number={3} onClick={() => handleCalculation(4)} />
            <NumberKey number={"-"} />
            <NumberKey number={"."} />
            <NumberKey number={0} onClick={() => handleCalculation(0)} />
            <NumberKey number={"/"} />
            <NumberKey number={"x"} />
            <CalcKey
              className="col-span-2 p-4 text-xl text-center text-white rounded-md "
              style={{ ...tertiaryColor }}
              onClick={handleReset}
            >
              <span className="font-bold uppercase">Reset</span>
            </CalcKey>

            <CalcKey
              className="col-span-2 p-4 text-center rounded-md "
              style={{
                backgroundColor: themeColors[theme].myKeys.secondaryKey.light,
                boxShadow: `${shadowValue} ${themeColors[theme].myKeys.secondaryKey.dark}`,
              }}
            >
              <span className="font-bold uppercase">=</span>
            </CalcKey>
          </Keypad>
        </div>
      </div>
    </>
  );
}

function Keypad(props: CustomProps) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  );
}
export default Calc;
