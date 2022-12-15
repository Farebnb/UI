import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./Views/HomePage";
import { Trending } from "./Views/Trending";
import { Home } from "./Views/Home";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/type" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
