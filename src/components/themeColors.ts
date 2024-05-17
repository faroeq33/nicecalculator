export const shadowValue = "inset 0 -0.25em 1px 0 ";
export const themeColors = [
  {
    backgrounds: {
      mainBackground: "hsl(222, 26%, 31%)",
      toggleBackground: "hsl(223, 31%, 20%)",
      screenBackground: "hsl(224, 36%, 15%)",
    },
    myKeys: {
      tertiaryKey: {
        keyBackground: "hsl(225, 21%, 49%)",
        keyShadow: `${shadowValue} hsl(224, 28%, 35%)`,
      },
      secondaryKey: { light: "#cf3f34", dark: "hsl(6, 70%, 34%)" },
      primaryKey: {
        light: "hsl(30, 25%, 89%)",
        dark: "hsl(28, 16%, 65%)",
      },
    },
    text: {
      veryDarkGrayishBlue: "hsl(221, 14%, 31%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  {
    backgrounds: {
      mainBackground: "hsl(0, 0%, 90%)",
      toggleBackground: "hsl(0,5%, 81%)",
      screenBackground: "hsl(0, 0%, 93%)",
    },
    myKeys: {
      tertiaryKey: {
        keyBackground: "hsl(185, 42%, 37%)",
        keyShadow: `${shadowValue} hsl(185, 58%, 25%)`,
      },
      secondaryKey: { light: "hsl(25, 98%, 40%)", dark: "hsl(25, 99%, 27%)" },
      primaryKey: {
        light: "hsl(45, 7%, 89%)",
        dark: "hsl(35, 11%, 61%)",
      },
    },
    text: {
      veryDarkGrayishYellow: "hsl(60, 10%, 19%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  {
    backgrounds: {
      mainBackground: "hsl(268, 75%, 9%)",
      toggleBackground: "hsl(268, 71%, 12%)",
      screenBackground: "hsl(268, 71%, 12%)",
    },
    myKeys: {
      tertiaryKey: {
        keyBackground: "hsl(281, 89%, 26%)",
        keyShadow: `${shadowValue} hsl(285, 91%, 52%)`,
      },
      secondaryKey: {
        light: "hsl(176, 100%, 44%)",
        dark: "hsl(177, 92%, 70%)",
      },
      primaryKey: {
        light: "hsl(268, 47%, 21%)",
        dark: " hsl(290, 70%, 36%)",
      },
    },
    text: {
      lightYellow: "hsl(52,100%, 62%)",
      veryDarkBlue: "hsl(198, 20%, 13%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
];
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
