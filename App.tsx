import React from 'react';

import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';


import Home from './src/Screens/home';
import theme from './src/Screens/styles/theme';
import CarDetails from './src/Screens/carDetails';
import Scheduling from './src/Screens/scheduling';
import ConfirmRental from './src/Screens/confirmRental';

export default function App() {
  /* 1. Efetuar o carregamento das fontes */
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ConfirmRental />
    </ThemeProvider>
  )
}
