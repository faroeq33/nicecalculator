import { useThemeContext } from "../../context/useThemeContext";
import { shadowValue, themeColors } from "../themeColors";
import { ACTIONS } from "./ACTIONS";
import { DispatchType } from "./CalculatorLogic";

type Props = {
  title: string;
  className?: string;
  textColor?: string;
  dispatch?: React.Dispatch<DispatchType>;
};

const formatOperationSymbol = (title) => {
  if (title === "x") {
    return "*";
  }
  if (title === "÷") {
    return "/";
  }
  return title;
};

function OperationButton({ dispatch, title }: Props) {
  const { theme } = useThemeContext();
  return (
    <>
      <button
        className="p-4 text-center rounded-md shadow-sm hover:cursor-pointer"
        style={{
          background: themeColors[theme].myKeys.primaryKey.light,
          boxShadow: `${shadowValue} ${themeColors[theme].myKeys.primaryKey.dark}`,
        }}
        onClick={() =>
          dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operation: formatOperationSymbol(title) },
          })
        }
      >
        <span
          className="text-4xl font-bold"
          style={{
            color: themeColors[theme].text.veryDarkGrayishBlue,
          }}
        >
          {title}
        </span>
      </button>
    </>
  );
}

export default OperationButton;
