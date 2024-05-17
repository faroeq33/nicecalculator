// type props = {
//   children?: React.ReactNode;
// };

import { CSSProperties } from "react";
import OutputField from "./OutputField";
import ToggleNumber from "./togglemenu/ToggleNumber";
import ToggleCol from "./togglemenu/ToggleCol";
import ToggleButton from "./togglemenu/ToggleButton";
import { useThemeContext } from "../context/useThemeContext";

function Calc() {
  const { theme, themeColors } = useThemeContext();
  return (
    <>
      <div
        className="h-screen p-6 text-white calc-wrapper"
        style={{
          background: themeColors[theme]?.darkDesaturatedBlue,
        }}
      >
        <div className="flex justify-between logo-wrapper">
          <div className="py-6 text-4xl font-bold">calc</div>
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
            background: themeColors[theme].backgrounds.screenBackground,
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
            <CalcNumberKey number={7} />
            <CalcNumberKey number={8} />
            <CalcNumberKey number={9} />
            <CalcKey
              className="flex items-center justify-center text-xl text-center rounded-md shadow-sm "
              style={{
                background: themeColors[0].myKeys.tertiaryKey.keyBackground,
                boxShadow: themeColors[0].myKeys.tertiaryKey.keyShadow,
              }}
            >
              <span className="font-bold uppercase">Del</span>
            </CalcKey>
            <CalcNumberKey number={4} />
            <CalcNumberKey number={5} />
            <CalcNumberKey number={6} />
            <CalcNumberKey number={"+"} />
            <CalcNumberKey number={1} />
            <CalcNumberKey number={2} />
            <CalcNumberKey number={3} />
            <CalcNumberKey number={"-"} />
            <CalcNumberKey number={"."} />
            <CalcNumberKey number={0} />
            <CalcNumberKey number={"/"} />

            <CalcKey
              className="col-span-2 p-4 text-xl text-center rounded-md shadow-sm "
              style={{
                background: themeColors[theme].myKeys.tertiaryKey.keyBackground,
                boxShadow: themeColors[theme].myKeys.tertiaryKey.keyShadow,
              }}
            >
              <span className="font-bold uppercase">Reset</span>
            </CalcKey>

            <CalcKey
              className="col-span-2 p-4 text-center rounded-md shadow-sm "
              style={{
                background: themeColors[theme].myKeys.primaryKey.light,
                boxShadow: themeColors[theme].myKeys.primaryKey.dark,
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

export type CustomProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

function CalcKey(props: CustomProps) {
  return (
    <>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </>
  );
}

function CalcNumberKey(props: {
  key?: number;
  number: number | string;
  className?: string;
}) {
  const { theme, themeColors } = useThemeContext();
  return (
    <>
      <div
        key={props.key}
        className="p-4 text-center rounded-md shadow-sm "
        style={{
          background: themeColors[theme].myKeys.primaryKey.light,
          boxShadow: themeColors[theme].myKeys.primaryKey.dark,
        }}
      >
        {" "}
        <span
          className="text-4xl font-bold "
          style={{ color: themeColors[theme].text.veryDarkGrayishBlue }}
        >
          {props.number}
        </span>
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
