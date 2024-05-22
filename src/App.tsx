import { useState } from "react";
import { ThemeContext } from "./context/useThemeContext";
import Calc from "./components/calc/Calc";

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
