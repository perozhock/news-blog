import React, { useCallback, useEffect, useState } from "react";
import apiKey from "../api/apiKey";
import axios from "axios";
import NewsCard from "./NewsCard";
import { Article } from "../types/article";

interface ContentProps {
    category: string;
}

const Content: React.FC<ContentProps> = ({ category }) => {
    const [data, setData] = useState<Article[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [country, setCountry] = useState<string>("us");

    const getData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
            );
            setData(response.data.articles || []);
            console.log(response.data);
        } catch (err) {
            setError("Ошибка загрузки. Попробуйте позже");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        getData();
    }, [getData]);

    if (loading)
        return (
            <div className="flex h-full items-center">
                <p className="text-center text-5xl font-extrabold">Загрузка...</p>
            </div>
        );
    if (error) return (
        <div className="flex h-full items-center">
            <p className="text-center">{error}</p>
        </div>
    );

    return (
        <div className="flex flex-wrap h-full overflow-auto border shadow-md gap-6 rounded-2xl p-5">
            {data?.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
    );
};

export default Content;
