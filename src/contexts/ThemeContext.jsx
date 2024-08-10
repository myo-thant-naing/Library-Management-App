import { useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  let ThemeReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };
  let [state, dispatch] = useReducer(ThemeReducer, {
    theme: "light",
  });
  let changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };
  const isDark = state.theme === "dark";
  return (
    <ThemeContext.Provider value={{ ...state, changeTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
