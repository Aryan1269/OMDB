import React from "react";

export default function DropDown({ options, func }) {
  
  return (
    <>
      <select 
        defaultValue={0}
        onChange={func}
        className="w-[20%]   text-lg outline-none border-none rounded text-zinc-200 "
        name="dropDown"
        id=""
      >
        <option value="0" disabled className="bg-gray-500 text-zinc-50">
          Filter
        </option>
        {options?.map((o, i) => (
          <option key={i} value={o} className="bg-blue-200 text-zinc-100">
            {o}
          </option>
        ))}
      </select>
    </>
  );
}
