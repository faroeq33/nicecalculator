import { useThemeContext } from "../../context/useThemeContext";
import { themeColors } from "../themeColors";

function ToggleButton() {
  const { theme, setTheme } = useThemeContext();

  const increment = () => {
    if (theme >= 2) {
      setTheme(0);
    } else {
      setTheme(theme + 1);
    }
  };

  const getToggleButtonSize = () => {
    const size = "1em";
    return { width: size, height: size };
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
          className="rounded-full "
          style={{
            ...getToggleButtonSize(),
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
