import RegisterDialog from "@/components/RegisterDialog";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full mt-24 px-4 sm:px-10 md:px-20 lg:px-28 space-y-24">
<div className="relative w-full max-w-3xl shadow-2xl overflow-hidden rounded-lg border border-gray-200">
        <Image
          className="object-cover w-full h-auto transition-transform duration-300 transform hover:scale-105"
          width={1000}
          height={700}
          src="/assets/main.png"
          alt="main"
        />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <p>New Here? Click on the below button</p>
        <RegisterDialog />
      </div>
    </div>
  );
};

export default Home;
