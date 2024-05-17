import { useContext } from "react";
import { createContext, SetStateAction, Dispatch } from "react";

interface ThemeContextInterface {
  themeColors: ThemeConfig[];
  theme: number;
  setTheme: Dispatch<SetStateAction<number>>;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  themeColors: [
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
      text: {
        veryDarkBlue: "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  ],
  theme: 0,
  setTheme: () => {}, // Dit is een tijdelijke placeholder
});
export const useThemeContext = () => useContext(ThemeContext);
export interface Backgrounds {
  mainBackground: string;
  toggleBackground: string;
  screenBackground: string;
}

export interface TertiaryKey {
  keyBackground: string;
  keyShadow: string;
}

export interface SecondaryKey {
  light: string;
  dark: string;
}

export interface PrimaryKey {
  light: string;
  dark: string;
}

export interface MyKeys {
  tertiaryKey: TertiaryKey;
  secondaryKey: SecondaryKey;
  primaryKey: PrimaryKey;
}

export interface Text {
  lightYellow?: string;
  veryDarkGrayishYellow?: string;
  veryDarkGrayishBlue?: string;
  veryDarkBlue?: string;
  white?: string;
}

export interface ThemeConfig {
  backgrounds: Backgrounds;
  myKeys: MyKeys;
  text: Text;
}
