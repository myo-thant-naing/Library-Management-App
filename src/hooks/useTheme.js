import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
export default function useTheme() {
  let contexts = useContext(ThemeContext);
  if (contexts === undefined) {
    new Error("theme context should be used in ThemeContextProvider");
  }
  return contexts;
}
