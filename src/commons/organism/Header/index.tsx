"use client";
import React from "react";

import { MenuIcon, SearchIcon } from "@/assets";
import IconWrapper from "@/commons/atom/IconWrapper";
import styles from "./header.module.css";

const Header = () => {
  const handleMenuClick = () => {
    console.log("WIP");
  };

  const handleSearchClick = () => {
    console.log("WIP");
  };

  return (
    <header className={`${styles.bar} flex flex-1 flex-row justify-between items-center`}>
      <div>
        <IconWrapper icon={MenuIcon} alt="Menu icon" onClick={handleMenuClick} />
      </div>
      <div>ngmusic</div>
      <div>
        <IconWrapper icon={SearchIcon} alt="Search icon" onClick={handleSearchClick} />
      </div>
    </header>
  );
};

export default Header;
