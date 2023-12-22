"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { LanguageButton } from "./LanguageButton";

export default function LangDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <LanguageButton aria-label="language">
          <span>ES</span>
        </LanguageButton>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
      >
        <DropdownItem key="text">English</DropdownItem>
        <DropdownItem key="number">Español</DropdownItem>
        <DropdownItem key="date">Deutsch</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
