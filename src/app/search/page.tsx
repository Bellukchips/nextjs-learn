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
    <div>
      <form onSubmit={onSearch}>
        <input type="text" placeholder="Cari user github" />
        <button>Cari</button><br />
        {query && <SectionResult query={query} />}
      </form>
    </div>
  );
}
