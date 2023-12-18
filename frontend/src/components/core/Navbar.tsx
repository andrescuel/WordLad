'use client'

import { useState } from "react";
import LangDropdown from "./LangDropdown";

export default function Navbar() {
  const [language, setLanguage] = useState("EN"); // Default language

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

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
      <div id="headerRight">
        right
      </div>
    </header>
  );
}
