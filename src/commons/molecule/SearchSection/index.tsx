"use client";
import React, { useState } from "react";

import Input from "@/commons/atom/Input";
import Button from "@/commons/atom/Button";

type PropsType = {
  onSearch?: (term: string) => any;
};

const SearchSection = (props: PropsType) => {
  const [term, setTerm] = useState("");

  return (
    <div className="flex flex-col flex-1">
      <Input
        name="search_terms"
        id="search_terms"
        placeholder="Artist / Album / Title"
        onChange={(ev) => setTerm(ev.target.value)}
      />
      <Button label="Search" onClick={() => props.onSearch?.(term)} />
    </div>
  );
};

export default SearchSection;
