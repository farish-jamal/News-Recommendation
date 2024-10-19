import React from "react";
import MainCard from "@/components/MainCard";
import SideCard from "@/components/SideCard";
import { Toaster } from "sonner";
import { mainNewsArray } from "@/dump/mainDumb";
import { newsArray } from "@/dump/dummy";

const Home: React.FC = () => {
  return (
    <div>
      <Toaster />
      <h1 className="text-center mt-6 text-3xl font-bold underline">Latest News</h1>
      <div className="flex w-full mt-14 px-28 space-x-10">
        <SideCard articles={newsArray} />
        <MainCard articles={mainNewsArray} />
        <SideCard articles={newsArray} />
      </div>
    </div>
  );
};

export default Home;