import LangDropdown from "./LangDropdown";
import Link from "next/link";
import { CiGrid41, CiLineHeight } from "react-icons/ci";

export default function Navbar() {
  return (
    <header className="flex min-w-full justify-between p-4 border-b border-stone-900">
      <div id="headerLeft">
        <LangDropdown />
      </div>
      <div id="headerTitle">
        <h1 className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500">
          WordLad
        </h1>
      </div>
      <div id="headerRight" className="flex">
        <Link
          href="/wordle"
          className="text-orange-300 hover:text-white duration-300"
        >
          <CiGrid41 size="35" />
        </Link>
        <Link
          href="/wordladder"
          className="text-orange-300 hover:text-white duration-300"
        >
          <CiLineHeight size="35" />
        </Link>
      </div>
    </header>
  );
}
