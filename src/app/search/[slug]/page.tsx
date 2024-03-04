"use client";
import React, { useEffect, useState } from "react";

import Card from "@/commons/organism/Card";
import { useParams } from "next/navigation";

import styles from "./style.module.css";
import Button from "@/commons/atom/Button";

const SearchPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [datasItunes, setDatasItunes] = useState<{ img: string; artist: string; title: string; genre: string; price: string }[]>(
    []
  );
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    if (loading) return;
    setLoading(true);
    const res = await fetch(`https://itunes.apple.com/search?term=${slug}&limit=${limit}`);
    const datas = await res.json();
    setDatasItunes(
      datas.results.map((v) => ({
        img: v.artworkUrl100,
        artist: v.artistName,
        title: v.trackName,
        genre: v.primaryGenreName,
        price: "1.29",
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    setLimit(10);
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [limit]);

  return (
    <div className={styles.bg}>
      {datasItunes.map((v, k) => (
        <Card key={k} {...v} />
      ))}
      <div className="w-full flex flex-col px-5 mb-3">
        <Button label={loading ? "Loading" : "Load More"} onClick={() => setLimit((p) => p + 10)} color="primary" />
      </div>
    </div>
  );
};

export default SearchPage;
