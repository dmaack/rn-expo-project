import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants";
import { theme } from "./src/infrastructure/theme";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/oswald";
import * as Font from "expo-font";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({ Lato_400Regular, Oswald_400Regular });
      } catch {
        // handle error
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
