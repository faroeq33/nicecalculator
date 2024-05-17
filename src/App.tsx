import { useState } from "react";
import Calc from "./components/Calc/Calc";
import { ThemeContext } from "./context/useThemeContext";

// Definieer een type voor je context

function App() {
  const [theme, setTheme] = useState<number>(0);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Calc />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
