import React from 'react';
import Image from 'next/image';

interface Article {
 id: number;
 title: string;
 description: string;
 author_name: string;
 media_house_name: string;
 image: string;
}

interface MainCardProps {
 articles: Article[];
}

const MainCard: React.FC<MainCardProps> = ({ articles }) => {
  return (
    <div className="w-1/3 p-4">
      {articles.map((article) => (
        <div key={article.id} className="pb-2 mb-10">
          <Image
            layout="responsive"
            width={100}
            height={100}
            src={article.image} 
            alt="logo" 
            className="w-full mb-5"
          />
          <h3 className="text-3xl font-bold mb-3">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-3">By {article.author_name} | {article.media_house_name}</p>
          <p className="text-gray-800">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MainCard;
