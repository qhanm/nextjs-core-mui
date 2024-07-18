"use client";

import { createContext, ReactNode, useState } from "react";
import { ITheme } from "../theme/custom-theme";

type ISettingContent = {
  theme: ITheme;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setTheme: (theme: ITheme) => void;
};

export const SettingContext = createContext<ISettingContent>({
  theme: "light",
  loading: true,
  setLoading: () => Boolean,
  setTheme: (theme: ITheme) => Promise.resolve(),
});

interface ISettingsProviderProps {
  children: ReactNode;
}

export const SettingProvider = ({ children }: ISettingsProviderProps) => {
  const [theme, setTheme] = useState<ITheme>("light");
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetLoading = (loading: boolean) => setLoading(loading);
  const handleSetTheme = (theme: ITheme) => setTheme(theme);
  return (
    <SettingContext.Provider
      value={{
        theme,
        loading,
        setLoading: handleSetLoading,
        setTheme: handleSetTheme,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export const SettingConsumer = SettingContext.Consumer;
