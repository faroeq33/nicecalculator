import { useThemeContext } from "../../context/useThemeContext";
import { shadowValue, themeColors } from "../themeColors";
import { ACTIONS } from "./ACTIONS";

type Props = {
  operation: number | string;
  className?: string;
  textColor?: string;
  dispatch?: React.Dispatch<object>;
};

function OperationButton({ dispatch, operation }: Props) {
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
          dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
        }
      >
        <span
          className="text-4xl font-bold"
          style={{
            color: themeColors[theme].text.veryDarkGrayishBlue,
          }}
        >
          {operation}
        </span>
      </button>
    </>
  );
}

export default OperationButton;
