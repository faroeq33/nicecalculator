// type props = {
//   children?: React.ReactNode;
// };

import ScreenBackground from "../ScreenBackground";
import ToggleNumber from "../togglemenu/ToggleNumber";
import ToggleCol from "../togglemenu/ToggleCol";
import ToggleButton from "../togglemenu/ToggleButton";
import { useThemeContext } from "../../context/useThemeContext";
import DigitButton from "./DigitButton";
import CalcButton from "./CalcKey";
import { CSSProperties, useReducer } from "react";
import { shadowValue, themeColors } from "../../data/themeColors";
import OperationButton from "./OperationButton";
import Keypad from "./Keypad";
import { reducer, formatOperand } from "./CalculatorLogic";
import { ACTIONS } from "../../data/ACTIONS";

function Calc() {
  const { theme } = useThemeContext();
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: null,
      previousOperand: null,
      operation: null,
      overwrite: false,
    }
  );

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
        className="p-6 calc-wrapper"
        style={{
          background: themeColors[theme]?.backgrounds.mainBackground,
          ...textColor,
        }}
      >
        <div className="h-screen max-w-sm mx-auto">
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
                  <div className="flex justify-between">
                    <span className="w-full text-xs text-center uppercase ">
                      theme
                    </span>
                  </div>
                </ToggleCol>
                <ToggleCol>
                  <ToggleButton />
                </ToggleCol>
              </div>
            </div>
          </div>
          <ScreenBackground
            className="flex flex-col items-end justify-around p-6 text-4xl font-extrabold text-right break-words break-all rounded-md outputfield"
            style={{
              background: themeColors[theme]?.backgrounds.screenBackground,
              ...textColor,
            }}
          >
            <div className="previous-operand">
              {formatOperand(previousOperand)} {operation}
            </div>
            <div className="current-operand">
              {formatOperand(currentOperand)}
            </div>
          </ScreenBackground>
          <div
            className="p-4 mt-4 rounded-md calcwrapper"
            style={{
              background: themeColors[theme].backgrounds.toggleBackground,
            }}
          >
            <Keypad className="grid grid-cols-4 gap-3 p-3">
              <DigitButton digit="7" dispatch={dispatch} />
              <DigitButton digit="8" dispatch={dispatch} />
              <DigitButton digit="9" dispatch={dispatch} />
              <CalcButton
                className="flex items-center justify-center text-xl text-center text-white rounded-md"
                style={tertiaryColor}
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              >
                <span className="font-bold uppercase">Del</span>
              </CalcButton>
              <DigitButton digit="4" dispatch={dispatch} />
              <DigitButton digit="5" dispatch={dispatch} />
              <DigitButton digit="6" dispatch={dispatch} />
              <OperationButton title="+" dispatch={dispatch} />
              <DigitButton digit="1" dispatch={dispatch} />
              <DigitButton digit="2" dispatch={dispatch} />
              <DigitButton digit="3" dispatch={dispatch} />
              <OperationButton title="-" dispatch={dispatch} />
              <OperationButton title="." dispatch={dispatch} />
              <DigitButton digit="0" dispatch={dispatch} />
              <OperationButton title="÷" dispatch={dispatch} />
              <OperationButton title="x" dispatch={dispatch} />
              <CalcButton
                className="col-span-2 p-4 text-xl text-center text-white rounded-md "
                style={{ ...tertiaryColor }}
                onClick={() => dispatch({ type: ACTIONS.CLEAR })}
              >
                <span className="font-bold uppercase">Reset</span>
              </CalcButton>
              <CalcButton
                className="col-span-2 p-4 text-center rounded-md"
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
                style={{
                  backgroundColor: themeColors[theme].myKeys.secondaryKey.light,
                  boxShadow: `${shadowValue} ${themeColors[theme].myKeys.secondaryKey.dark}`,
                }}
              >
                <span className="font-bold uppercase">=</span>
              </CalcButton>
            </Keypad>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
