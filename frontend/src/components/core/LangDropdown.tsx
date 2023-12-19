"use client";

import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { changeLangDropdown, selectLangDropdown } from "@/state/core/coreSlice";

export default function LangDropdown() {
  const dispatch = useDispatch();
  const langDropdown = useSelector(selectLangDropdown);
  const languages = ["es", "en", "de"];

  return (
    <div className="relative flex flex-col items-center w-24 min-h-fit rounded-lg">
      <button
        onClick={() => dispatch(changeLangDropdown())}
        className="bg-orange-300 px-3 py-2 w-full flex items-center justify-between font-bold text-sm rounded-lg tracking-wider border-2 border-transparent hover:border-white duration-300 text-black hover:text-white"
      >
        <img src={`/static/images/es.svg`} width="20"/>
        ES
        {!langDropdown ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </button>

      {langDropdown && (
        <div className="bg-amber-600 absolute top-14 flex flex-col items-start rounded-lg p-1 w-full">
          {languages.map((item, i) => (
            <div
              className="flex w-full justify-center gap-2 hover:bg-orange-300 cursor-pointer rounded-r-lg uppercase border-l-transparent hover:border-l-white border-l-4 font-bold px-2 py-1"
              key={i}
            >
              <img src={`/static/images/${item}.svg`} width="20"/>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
