import React, { useEffect, useState } from "react";
import { EcoNews } from "../services/types";
import NewsCard from "./NewsCard";

const NewsList: React.FC = () => {
  const [ecoNews, setEcoNews] = useState<EcoNews[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=eco&apiKey=dc27e26e77c245bfaaf09082703ba16d"
        );
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setEcoNews(data.articles);
      } catch (error) {
        console.error("Error fetching eco news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-2/5 bg-white p-6 overflow-y-auto">
      <h2 className="text-[#0CAEFF] text-xl font-bold mb-4">ECO NEWS</h2>
      <div className="max-h-[550px] space-y-4 pr-2">
        {ecoNews.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
