import { useState } from "react";
import Calc from "./components/Calc";
import { ThemeConfig, ThemeContext } from "./context/useThemeContext";

// Definieer een type voor je context

function App() {
  const [theme, setTheme] = useState(0);
  const themeColors: ThemeConfig[] = [
    {
      backgrounds: {
        mainBackground: "hsl(222, 26%, 31%)",
        toggleBackground: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
      },
      myKeys: {
        tertiaryKey: {
          keyBackground: "hsl(30, 25%, 89%)",
          keyShadow: "hsl(28, 16%, 65%)",
        },
        secondaryKey: { light: "#cf3f34", dark: "hsl(6, 70%, 34%)" },
        primaryKey: {
          light: "hsl(30, 25%, 89%)",
          dark: "hsl(28, 16%, 65%)",
        },
      },
      darkDesaturatedBlue: "hsl(222, 26%, 31%)",
      text: {
        veryDarkGrayishBlue: "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  ];
  const increment = () => {
    if (theme >= 2) {
      setTheme(0);
      return;
    }
    setTheme(theme + 1);
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ themeColors, theme, setTheme, increment }}
      >
        <Calc />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
