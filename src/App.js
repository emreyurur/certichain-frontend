import React from 'react';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Shell from "./components/Shell";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Shell />
    </MantineProvider>
  );
}