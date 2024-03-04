"use client";
import Image from "next/image";

import { LogoImg } from "@/assets";
import SearchSection from "@/commons/molecule/SearchSection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[30px] py-6 bg">
      <div className="flex flex-1 items-center justify-center">
        <Image className="logo" src={LogoImg} alt="logo" width={72.2} height={83.8} />
      </div>
      <div className="flex w-full">
        <SearchSection onSearch={(v) => console.log(v)} />
      </div>
    </main>
  );
};

export default Home;
