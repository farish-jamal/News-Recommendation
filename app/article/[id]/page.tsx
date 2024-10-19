import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  const article = {
    id: 1,
    title:
      "The Rise of AI in Everyday Life in outlook and another generation series",
    image: "/assets/main.png",
    content:
      "This article explores how artificial intelligence is transforming various aspects of daily life, from smart homes to healthcare. AI technology is making our lives easier by automating tasks, enhancing decision-making processes, and improving communication. As AI systems evolve, they are becoming more integrated into our daily routines, impacting everything from personal devices to larger societal structures.",
    author_name: "Alice Johnson",
    media_house_name: "Tech Insights",
    date: "2024-10-19",
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-10">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <Image
        className="w-full h-auto rounded-lg shadow-lg mb-6"
        width={1000}
        height={700}
        src={article.image}
        alt={article.title}
      />
      <p className="text-gray-500 mb-2">
        {new Date(article.date).toLocaleDateString()}
      </p>
      <p className="text-gray-600 mb-4">
        By {article.author_name} | {article.media_house_name}
      </p>
      <div className="text-gray-800 leading-relaxed">
        <p>{article.content}</p>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <button className="flex items-center justify-center space-x-3">
          <ThumbsUpIcon />
          <p className="text-xl">1</p>
        </button>
        <button className="flex items-center justify-center space-x-3">
          <ThumbsDownIcon />
          <p className="text-xl">2</p>
        </button>
      </div>
    </div>
  );
};

export default page;
