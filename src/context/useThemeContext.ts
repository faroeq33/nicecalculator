import { useContext } from "react";
import { createContext, SetStateAction, Dispatch } from "react";

interface ThemeContextInterface {
  theme: number;
  setTheme: Dispatch<SetStateAction<number>>;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 0,
  setTheme: () => {}, // Dit is een tijdelijke placeholder
});
export const useThemeContext = () => useContext(ThemeContext);
