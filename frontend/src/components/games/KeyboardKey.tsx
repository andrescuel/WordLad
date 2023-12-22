"use client";
import { extendVariants, Button } from "@nextui-org/react";

export const KeyboardKey = extendVariants(Button, {
  variants: {
    size: {
      lg: "flex-2 min-h-12 min-w-unit-0",
      md: "flex-1 min-h-12 min-w-unit-0",
    },
  },
});
