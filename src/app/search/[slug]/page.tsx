"use client";
import React from "react";

import Card from "@/commons/organism/Card";
import { useParams } from "next/navigation";

import styles from "./style.module.css";

const SearchPage = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  return (
    <div className={styles.bg}>
      <Card />
      <Card />
    </div>
  );
};

export default SearchPage;
