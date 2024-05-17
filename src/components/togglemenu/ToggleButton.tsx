import { useThemeContext } from "../../context/useThemeContext";

function ToggleButton() {
  const { themeColors, theme, setTheme } = useThemeContext();

  const increment = () => {
    if (theme >= 2) {
      setTheme(0);
    } else {
      setTheme(theme + 1);
    }
  };
  return (
    <>
      <div
        className={`flex ${theme === 0 ? "justify-start" : ""} ${
          theme === 1 ? "justify-center" : ""
        } ${
          theme === 2 ? "justify-end" : ""
        } w-full  p-2 rounded-full cursor-pointer`}
        style={{
          backgroundColor: themeColors[theme].backgrounds.toggleBackground,
          boxShadow: themeColors[theme].myKeys.secondaryKey.light,
        }}
        onClick={increment}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: themeColors[theme].myKeys.secondaryKey.light,
            boxShadow: themeColors[theme].myKeys.secondaryKey.light,
          }}
        >
          {/* {theme} */}
        </div>
      </div>
    </>
  );
}
export default ToggleButton;
