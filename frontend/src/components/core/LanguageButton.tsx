"use client";
import { extendVariants, Button } from "@nextui-org/react";

export const LanguageButton = extendVariants(Button, {
  variants: {
    size: {
      responsive:
        "px-unit-0 min-w-unit-8 h-unit-8 text-tiny gap-unit-0 rounded-small sm:px-unit-4 sm:min-w-unit-20 sm:h-unit-10  sm:text-small sm:gap-unit-2 sm:rounded-medium",
    },
    text: {
      default: "capitalize font-bold",
    },
  },
  defaultVariants: {
    size: "responsive",
    variant: "flat",
    text: "default",
  },
});
