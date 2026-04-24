import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
  fontFamily:
    "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
});

export function ThemeProvider({ children }) {
  const value = useMemo(
    () => ({
      fontFamily:
        "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    }),
    []
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTheme() {
  return useContext(ThemeContext);
}

