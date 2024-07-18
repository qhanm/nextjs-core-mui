import { useContext } from "react";
import { SettingContext } from "../contexts/setting-context";

export const useSettingContext = () => useContext(SettingContext);
