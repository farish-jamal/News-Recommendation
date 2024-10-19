import React from "react";

interface Article {
 id: number;
 title: string;
 description: string;
 author_name: string;
 media_house_name: string;
}

interface SideCardProps {
 articles: Article[];
}

const SideCard: React.FC<SideCardProps> = ({ articles }) => {

  return (
    <div className="w-1/3 p-4">
      {articles.map((article) => (
        <div key={article.id} className="mb-14">
          <h3 className="text-3xl font-bold mb-3">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-3">By {article.author_name} | {article.media_house_name}</p>
          <p className="text-gray-800">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SideCard;
