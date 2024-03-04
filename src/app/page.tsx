import Image from "next/image";

import { LogoImg } from "@/assets";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[30px] py-6 bg">
      <div className="flex flex-1 items-center justify-center">
        <Image className="logo" src={LogoImg} alt="logo" width={72.2} height={83.8} />
      </div>
      <div className="flex flex-col ">
        <input type="text" name="search_terms" id="search_terms" placeholder="Artist / Album / Title" />
        <input type="button" value="Search" />
      </div>
    </main>
  );
};

export default Home;
