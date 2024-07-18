// ** mui
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { createCustomTheme } from "./custom-theme";

type IProps = {
  children: React.ReactNode;
};

const ThemeComponent = ({ children }: IProps) => {
  const theme = createCustomTheme("light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
