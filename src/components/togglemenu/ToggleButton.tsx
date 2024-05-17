import { useThemeContext } from "../../context/useThemeContext";

function ToggleButton() {
  const { theme, themeColors, increment } = useThemeContext();

  return (
    <>
      <div
        className={`flex ${theme === 1 ? "justify-start" : ""} ${
          theme === 2 ? "justify-center" : ""
        } ${
          theme === 3 ? "justify-end" : ""
        } w-full  p-2 rounded-full cursor-pointer`}
        style={{
          backgroundColor: themeColors[0].backgrounds.toggleBackground,
          boxShadow: themeColors[0].myKeys.secondaryKey.light,
        }}
        onClick={increment}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: themeColors[0].myKeys.primaryKey.dark,
          }}
        >
          {/* {theme} */}
        </div>
      </div>
    </>
  );
}
export default ToggleButton;
