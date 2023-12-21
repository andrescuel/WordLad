"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

export default function LangDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="flat" 
          className="capitalize font-bold"
        >
          ES
        </Button>
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
