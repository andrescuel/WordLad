"use client";

import {
  NavbarBrand,
  NavbarContent,
  Navbar,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { FiSettings } from "react-icons/fi";
import { LuInfo } from "react-icons/lu";
import { BiBarChartAlt2 } from "react-icons/bi";
import { PiLadderSimpleBold } from "react-icons/pi";
import { MdOutlineGridOn } from "react-icons/md";
import LangDropdown from "./LangDropdown";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MyNavbar() {
  const pathName = usePathname();

  return (
    <Navbar
      position="static"
      isBordered={true}
      maxWidth="sm"
      className="shadow-md"
    >
      <NavbarContent justify="start" className="w-1/3">
        <LangDropdown />
        <Tooltip placement="bottom" content="Info">
          <Button isIconOnly variant="flat" aria-label="info">
            <LuInfo size="24" />
          </Button>
        </Tooltip>
      </NavbarContent>
      <NavbarBrand className="uppercase text-2xl font-bold w-1/3 items-center justify-center flex">
        WordLad
      </NavbarBrand>
      <NavbarContent justify="end" className="w-1/3">
        {pathName !== "/wordladder" ? (
          <Tooltip placement="bottom" content="Word Ladder">
            <Link href="wordladder">
              <Button isIconOnly variant="flat" aria-label="Word Ladder">
                <PiLadderSimpleBold size="24" />
              </Button>
            </Link>
          </Tooltip>
        ) : null}
        {pathName !== "/wordle" ? (
          <Tooltip placement="bottom" content="Wordle">
            <Link href="/wordle">
              <Button isIconOnly variant="flat" aria-label="Wordle">
                <MdOutlineGridOn size="24" />
              </Button>
            </Link>
          </Tooltip>
        ) : null}
        {pathName === "/wordle" || pathName === "/wordladder" ? (
          <Tooltip placement="bottom" content="Stats">
            <Button isIconOnly variant="flat" aria-label="stats">
              <BiBarChartAlt2 size="24" />
            </Button>
          </Tooltip>
        ) : null}
        {pathName === "/wordle" || pathName === "/wordladder" ? (
          <Tooltip placement="bottom" content="Settings">
            <Button isIconOnly variant="flat" aria-label="settings">
              <FiSettings size="24" />
            </Button>
          </Tooltip>
        ) : null}
      </NavbarContent>
    </Navbar>
  );
}
