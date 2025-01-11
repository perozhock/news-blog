import { useState } from "react";
import { Article } from "../types/article";
import Modal from "./Modal";

interface NewsCardProps {
    article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    const { title, description, urlToImage } = article;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div
                onClick={openModal}
                className="flex flex-col flex-grow w-64 h-64 overflow-hidden border rounded-xl shadow-md cursor-pointer"
            >
                {urlToImage && (
                    <img
                        src={urlToImage}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                )}
                <div className="p-4 mt-auto">
                    <h2 className="text-lg font-bold truncate">{title}</h2>
                    <p className="text-sm line-clamp-2">
                        {description || "Описание отсутствует"}
                    </p>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {
                    <div className="shadow-md">
                        {urlToImage && (
                            <img
                                src={urlToImage}
                                alt={title}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                        )}
                        <div className="p-4 font-black text-xl">
                            {article.title}
                        </div>
                        <div className="px-4 pb-4">
                            <a
                                className="font-bold hover:underline"
                                href={article.url}
                                target="_blank"
                            >
                                ссылка тык
                            </a>
                        </div>
                        <div className="px-4 pb-4">
                            {article.content || "Статьи нет"}
                        </div>
                    </div>
                }
            </Modal>
        </>
    );
};

export default NewsCard;
