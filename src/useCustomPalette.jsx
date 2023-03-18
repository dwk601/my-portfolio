// src/useCustomPalette.js
import { useTheme } from "@mui/material/styles";

const useCustomPalette = () => {
  const theme = useTheme();
  const customPalette = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    tertiary: theme.palette.tertiary.main,
    quaternary: theme.palette.quaternary.main,
    quinary: theme.palette.quinary.main,
  };
  return customPalette;
};

export default useCustomPalette;
