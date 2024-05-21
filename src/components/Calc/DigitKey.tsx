import { useCalculationContext } from "../../context/useCalculationContext";
import { useThemeContext } from "../../context/useThemeContext";
import { shadowValue, themeColors } from "../themeColors";

type Props = {
  key?: number;
  title: number | string;
  className?: string;
  textColor?: string;
  onClick?: () => void;
};

function DigitKey(props: Props) {
  const { theme } = useThemeContext();
  const { dispatchers } = useCalculationContext();
  return (
    <>
      <div
        key={props.key}
        className="p-4 text-center rounded-md shadow-sm hover:cursor-pointer"
        style={{
          background: themeColors[theme].myKeys.primaryKey.light,
          boxShadow: `${shadowValue} ${themeColors[theme].myKeys.primaryKey.dark}`,
        }}
        onClick={
          props.onClick
            ? props.onClick
            : () =>
                dispatchers.dispatchCalculation((props.title as number) || 0)
        }
      >
        <span
          className="text-4xl font-bold"
          style={{
            color: themeColors[theme].text.veryDarkGrayishBlue,
          }}
        >
          {props.title}
        </span>
      </div>
    </>
  );
}

export default DigitKey;
