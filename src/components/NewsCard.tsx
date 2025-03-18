import { EcoNews } from "../services/types";

type NewsCardProps = {
  article: EcoNews;
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 border-b border-[#D9D9D9] pb-4 mb-4 cursor-pointer hover:bg-gray-100 p-2"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-24 h-24 object-cover rounded-md"
        />
      )}
      <p className="text-gray-800 text-sm">{article.description}</p>
    </a>
  );
};

export default NewsCard;
