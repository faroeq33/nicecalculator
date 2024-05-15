// type props = {
//   children?: React.ReactNode;
// };

import { CSSProperties, useState } from "react";
import OutputField from "./OutputField";
import ToggleNumber from "./togglemenu/ToggleNumber";
import ToggleItem from "./togglemenu/ToggleItem";

const themes = [
  {
    backgrounds: {
      mainBackground: "hsl(222, 26%, 31%)",
      toggleBackground: "hsl(223, 31%, 20%)",
      screenBackground: "hsl(224, 36%, 15%)",
    },
    myKeys: {
      tertiaryKey: {
        keyBackground: "hsl(30, 25%, 89%)",
        keyShadow: "hsl(28, 16%, 65%)",
      },
      secondaryKey: { light: "hsl(6, 63%, 50%)", dark: "hsl(6, 70%, 34%)" },
      primaryKey: {
        light: "hsl(30} , 25%, 89%)",
        dark: "hsl(28, 16%, 65%)",
      },
    },
    darkDesaturatedBlue: "hsl(222, 26%, 31%)",
    text: {
      veryDarkGrayishBlue: "hsl(221, 14%, 31%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
];

function Calc() {
  const [theme, setTheme] = useState(0);

  const increment = () => {
    if (theme >= 2) {
      setTheme(0);
      return;
    }
    setTheme(theme + 1);
  };

  return (
    <>
      <div
        className="h-screen p-6 text-white calc-wrapper"
        style={{
          background: themes[0].darkDesaturatedBlue,
        }}
      >
        <div className="flex justify-between logo-wrapper">
          <div className="py-6 text-4xl font-bold">calc</div>
          <div className="w-1/2 pb-6 text-xl font-extrabold">
            <div className="flex flex-wrap items-center">
              <ToggleItem></ToggleItem>
              <ToggleItem>
                <div className="flex justify-between px-2 py-1 text-sm">
                  <ToggleNumber number={1} />
                  <ToggleNumber number={2} />
                  <ToggleNumber number={3} />
                </div>
              </ToggleItem>
              <ToggleItem>
                <span className="h-4 text-xs text-right uppercase">theme</span>
              </ToggleItem>
              <ToggleItem>
                <div
                  className={`flex ${theme === 1 ? "justify-start" : ""} ${
                    theme === 2 ? "justify-center" : ""
                  } ${
                    theme === 3 ? "justify-end" : ""
                  } w-full  p-2 rounded-full cursor-pointer`}
                  style={{
                    background: themes[0].myKeys.secondaryKey.light,
                    boxShadow: themes[0].myKeys.secondaryKey.dark,
                  }}
                  onClick={increment}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: themes[0].myKeys.secondaryKey.light,
                      boxShadow: themes[0].myKeys.secondaryKey.dark,
                    }}
                  >
                    {/* {theme} */}
                  </div>
                </div>
              </ToggleItem>
            </div>
          </div>
        </div>

        <OutputField
          className="p-6 text-4xl font-extrabold text-right rounded-md outputfield "
          style={{
            background: themes[0].backgrounds.screenBackground,
          }}
        >
          399,981
        </OutputField>

        <div
          className="p-4 mt-4 rounded-md shadow-sm calcwrapper"
          style={{ background: themes[0].backgrounds.toggleBackground }}
        >
          <Keypad className="grid grid-cols-4 gap-3 p-3">
            <CalcNumberKey number={7} />
            <CalcNumberKey number={8} />
            <CalcNumberKey number={9} />
            <CalcKey
              className="flex items-center justify-center text-xl text-center rounded-md shadow-sm "
              style={{
                background: themes[0].myKeys.tertiaryKey.keyBackground,
                boxShadow: themes[0].myKeys.tertiaryKey.keyShadow,
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
            <CalcNumberKey number={"x"} />

            <CalcKey
              className="col-span-2 p-4 text-xl text-center rounded-md shadow-sm "
              style={{
                background: themes[0].myKeys.tertiaryKey.keyBackground,
                boxShadow: themes[0].myKeys.tertiaryKey.keyShadow,
              }}
            >
              <span className="font-bold uppercase">Reset</span>
            </CalcKey>

            <CalcKey
              className="col-span-2 p-4 text-center rounded-md shadow-sm "
              style={{
                background: themes[0].myKeys.primaryKey.light,
                boxShadow: themes[0].myKeys.primaryKey.dark,
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

type CustomProps = {
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
  return (
    <>
      <div
        key={props.key}
        className="p-4 text-center rounded-md shadow-sm "
        style={{
          background: themes[0].myKeys.primaryKey.light,
          boxShadow: themes[0].myKeys.primaryKey.dark,
        }}
      >
        {" "}
        <span
          className="text-4xl font-bold "
          style={{ color: themes[0].text.veryDarkGrayishBlue }}
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
