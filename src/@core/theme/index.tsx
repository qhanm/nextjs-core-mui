"use client";

// ** mui
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import React from "react";
import { createCustomTheme } from "./custom-theme";
import { SettingConsumer } from "../contexts/setting-context";

type IProps = {
  children: React.ReactNode;
};

const ThemeComponent = ({ children }: IProps) => {
  return (
    <SettingConsumer>
      {({ theme }) => {
        return (
          <ThemeProvider theme={createCustomTheme(theme)}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        );
      }}
    </SettingConsumer>
  );
};

export default ThemeComponent;
