import Calc from "./components/Calc";
import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

export const useThemeContext = () => useContext(ThemeContext);

interface Backgrounds {
  mainBackground: string;
  toggleBackground: string;
  screenBackground: string;
}

interface TertiaryKey {
  keyBackground: string;
  keyShadow: string;
}

interface SecondaryKey {
  light: string;
  dark: string;
}

interface PrimaryKey {
  light: string;
  dark: string;
}

interface MyKeys {
  tertiaryKey: TertiaryKey;
  secondaryKey: SecondaryKey;
  primaryKey: PrimaryKey;
}

interface Text {
  veryDarkGrayishBlue: string;
  white: string;
}

interface ThemeConfig {
  backgrounds: Backgrounds;
  myKeys: MyKeys;
  darkDesaturatedBlue: string;
  text: Text;
}

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

// Definieer een type voor je context
interface ThemeContextInterface {
  themeColors: ThemeConfig[];
  theme: number;
  setTheme: Dispatch<SetStateAction<number>>;
  increment: () => void;
}

// Initialiseer de context met een standaardwaarde die voldoet aan het type
const ThemeContext = createContext<ThemeContextInterface>({
  themeColors,
  theme: 0,
  setTheme: () => {}, // Dit is een tijdelijke placeholder
  increment: () => {}, // Dit is een tijdelijke placeholder
});

function App() {
  const [theme, setTheme] = useState(0);

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
