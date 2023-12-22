"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "./store";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </Provider>
  );
}
