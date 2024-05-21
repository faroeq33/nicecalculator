import { useThemeContext } from "../../context/useThemeContext";
import { shadowValue, themeColors } from "../themeColors";
import { ACTIONS } from "./Calc";

type Props = {
  digit: string;
  className?: string;
  textColor?: string;
  dispatch?: React.Dispatch<object>;
};

function DigitButton({ digit, dispatch }: Props) {
  const { theme } = useThemeContext();
  return (
    <>
      <button
        className="p-4 text-center rounded-md shadow-sm hover:cursor-pointer"
        style={{
          background: themeColors[theme].myKeys.primaryKey.light,
          boxShadow: `${shadowValue} ${themeColors[theme].myKeys.primaryKey.dark}`,
        }}
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: digit })}
      >
        <span
          className="text-4xl font-bold"
          style={{
            color: themeColors[theme].text.veryDarkGrayishBlue,
          }}
        >
          {digit}
        </span>
      </button>
    </>
  );
}

export default DigitButton;
