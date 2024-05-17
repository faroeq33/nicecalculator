import { useThemeContext } from "../../context/useThemeContext";

type Props = {
  key?: number;
  number: number | string;
  className?: string;
  textColor?: string;
};

function NumberKey(props: Props) {
  const { theme, themeColors } = useThemeContext();
  return (
    <>
      <div
        key={props.key}
        className="p-4 text-center rounded-md shadow-sm"
        style={{
          background: themeColors[theme].myKeys.primaryKey.light,
          boxShadow: themeColors[theme].myKeys.primaryKey.dark,
        }}
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
