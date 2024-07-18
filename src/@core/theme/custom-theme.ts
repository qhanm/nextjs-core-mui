// ** mui theme
import { createTheme } from "@mui/material/styles";
import { red, orange, blue, pink, green, common } from "@mui/material/colors";

export type ITheme = "light" | "dark";

// https://m2.material.io/inline-tools/color/
const colorModes = {
  light: {
    primary: blue[700],
    secondary: red[200],
    error: red[500],
    warning: orange[500],
    info: blue[500],
    success: green[500],
    text: common["white"],
  },
  dark: {
    primary: blue[200],
    secondary: pink[200],
    error: red[500],
    warning: orange[500],
    info: blue[500],
    success: green[500],
    text: common["black"],
  },
};

export const createCustomTheme = (mode: ITheme) => {
  const colors = colorModes[mode];

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: { main: colors.secondary },
      error: { main: colors.secondary },
      warning: { main: colors.secondary },
      info: { main: colors.secondary },
      success: { main: colors.secondary },
    },
    typography: {},
    components: {},
  });
};
