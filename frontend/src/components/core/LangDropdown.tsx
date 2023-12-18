"use client";

import { setLangDropdown } from "@/state/core/actions";
import { useDispatch } from "react-redux";

export default function LangDropdown() {
  return (
    <div className="relative flex flex-col items-center w-auto min-h-fit rounded-lg">
      <button
        onClick={setLangDropdown}
        className="bg-neutral-900 p-2 w-full flex items-center justify-between font-bold text-sm rounded-lg tracking-wider border-2 border-transparent active:border-white duration-300 text-black active:text-white"
      >
        ES
      </button>
    </div>
  );
}
