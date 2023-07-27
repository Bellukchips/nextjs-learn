"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const onSearch = (e: any) => {
    e.preventDefault();
    const query = e.target[0].value;
    setQuery(query);
  };
  return (
    <div className="">
      <form onSubmit={onSearch} className="w-full flex space-x-3 mt-20">
        <input
          type="text"
          placeholder="Cari user github"
          className="bg-slate-300 w-full  px-3"
        />
        <button className="bg-blue-500 text-white py-2 px-3 rounded-md">
          Cari
        </button>
      </form>
      <br />
      {query && <SectionResult query={query} />}
    </div>
  );
}
