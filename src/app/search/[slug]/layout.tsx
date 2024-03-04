import React from "react";
import { Metadata } from "next";

import Header from "@/commons/organism/Header";

export const metadata: Metadata = {
  title: "ngmusic logique | Search | Riko Logwirno",
  description: "Logique technical test by Riko Logwirno",
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
