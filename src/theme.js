import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
  fontFamily:
    "'Plus Jakarta Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  displayFontFamily: "'Fraunces', 'Playfair Display', Georgia, serif",
});

export function ThemeProvider({ children }) {
  const value = useMemo(
    () => ({
      fontFamily:
        "'Plus Jakarta Sans', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      displayFontFamily: "'Fraunces', 'Playfair Display', Georgia, serif",
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

