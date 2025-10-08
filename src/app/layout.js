"use client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" }, // azul TiMed
    secondary: { main: "#4caf50" }, // verde salud
    background: { default: "#f5f7fa" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
