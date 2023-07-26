import { useFonts } from "expo-font";

import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.otf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Home/>
      <StatusBar style="auto" />
    </>
  );
}

