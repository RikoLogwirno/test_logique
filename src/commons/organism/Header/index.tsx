"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { MenuIcon, SearchIcon } from "@/assets";
import IconWrapper from "@/commons/atom/IconWrapper";
import SearchModal from "../SearchModal";
import styles from "./header.module.css";

const Header = () => {
  const router = useRouter();

  const [searchShow, setSearchShow] = useState(false);

  const handleSubmit = (s: string) => {
    setSearchShow(false);
    router.push(`/search/${s}`);
  };

  const handleSearchClick = () => {
    setSearchShow(true);
  };

  return (
    <header className={styles.bar}>
      <div className={`${styles.innerCont} flex flex-1 flex-row justify-between items-center`}>
        <div>
          <IconWrapper icon={MenuIcon} alt="Menu icon" onClick={handleSearchClick} />
        </div>
        <div>ngmusic</div>
        <div>
          <IconWrapper icon={SearchIcon} alt="Search icon" onClick={handleSearchClick} />
        </div>
      </div>
      <SearchModal show={searchShow} onSubmit={handleSubmit} onClose={() => setSearchShow(false)} />
    </header>
  );
};

export default Header;
