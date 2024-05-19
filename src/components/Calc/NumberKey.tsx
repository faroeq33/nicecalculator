import { useThemeContext } from "../../context/useThemeContext";
import { shadowValue, themeColors } from "../themeColors";

type Props = {
  key?: number;
  number: number | string;
  className?: string;
  textColor?: string;
  onClick?: () => void;
};

function NumberKey(props: Props) {
  const { theme } = useThemeContext();
  return (
    <>
      <div
        key={props.key}
        className="p-4 text-center rounded-md shadow-sm"
        style={{
          background: themeColors[theme].myKeys.primaryKey.light,
          boxShadow: `${shadowValue} ${themeColors[theme].myKeys.primaryKey.dark}`,
        }}
        onClick={props.onClick}
      >
        {" "}
        <span
          className="text-4xl font-bold"
          style={{
            color: themeColors[theme].text.veryDarkGrayishBlue,
          }}
        >
          {props.number}
        </span>
      </div>
    </>
  );
}

export default NumberKey;
