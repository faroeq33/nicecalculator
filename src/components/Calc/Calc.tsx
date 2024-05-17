// type props = {
//   children?: React.ReactNode;
// };

import OutputField from "../OutputField";
import ToggleNumber from "../togglemenu/ToggleNumber";
import ToggleCol from "../togglemenu/ToggleCol";
import ToggleButton from "../togglemenu/ToggleButton";
import { useThemeContext } from "../../context/useThemeContext";
import NumberKey from "./NumberKey";
import CalcKey, { CustomProps } from "./CalcKey";
import { CSSProperties } from "react";

function Calc() {
  const { theme, themeColors } = useThemeContext();

  const textColor: CSSProperties = {
    color:
      theme === 1
        ? themeColors[theme].text.veryDarkGrayishBlue
        : themeColors[theme].text.white,
  };

  const tertiaryColor = {
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

        <OutputField
          className="p-6 text-4xl font-extrabold text-right rounded-md outputfield "
          style={{
            background: themeColors[theme]?.backgrounds.screenBackground,
            ...textColor,
          }}
        >
          399,981
        </OutputField>

        <div
          className="p-4 mt-4 rounded-md shadow-sm calcwrapper"
          style={{
            background: themeColors[theme].backgrounds.toggleBackground,
          }}
        >
          <Keypad className="grid grid-cols-4 gap-3 p-3">
            <NumberKey number={7} />
            <NumberKey number={8} />
            <NumberKey number={9} />
            <CalcKey
              className="flex items-center justify-center text-xl text-center text-white rounded-md shadow-sm "
              style={{
                ...tertiaryColor,
              }}
            >
              <span className="font-bold uppercase">Del</span>
            </CalcKey>
            <NumberKey number={4} />
            <NumberKey number={5} />
            <NumberKey number={6} />
            <NumberKey number={"+"} />
            <NumberKey number={1} />
            <NumberKey number={2} />
            <NumberKey number={3} />
            <NumberKey number={"-"} />
            <NumberKey number={"."} />
            <NumberKey number={0} />
            <NumberKey number={"/"} />
            <NumberKey number={"x"} />
            <CalcKey
              className="col-span-2 p-4 text-xl text-center text-white rounded-md shadow-sm "
              style={{ ...tertiaryColor }}
            >
              <span className="font-bold uppercase">Reset</span>
            </CalcKey>

            <CalcKey
              className="col-span-2 p-4 text-center rounded-md shadow-sm "
              style={{
                backgroundColor: themeColors[theme].myKeys.secondaryKey.light,
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
