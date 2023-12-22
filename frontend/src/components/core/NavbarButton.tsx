"use client";
import { extendVariants, Button } from "@nextui-org/react";

export const NavbarButton = extendVariants(Button, {
  variants: {
    size: {
      responsive:
        "px-unit-0 min-w-unit-8 h-unit-8 text-tiny gap-unit-0 rounded-small sm:min-w-unit-10 sm:h-unit-10",
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
