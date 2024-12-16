import { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";
import apiKey from "../api/apiKey";
import axios from "axios";

const Content = () => {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState();
    const [country, setCountry] = useState("us");

    const getData = useCallback(async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
            );
            setData(response.data);
            console.log(response.data);
        } finally {
        }
    }, []);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getData();
        }
        return () => {
            isMounted = false;
        };
    }, [getData]);

    return (
        <div className="h-full flex items-center justify-center border-4 rounded-2xl">
            <div className="flex flex-col border-4 rounded-2xl p-5">
                <button
                    className="inline-block text-4xl min-w-48 h-20 mb-4 border rounded-lg"
                    onClick={() => setCount(count + 1)}
                >
                    count is {count}
                </button>

                <button
                    className="inline-block border-2 rounded-lg align-middle min-w-12"
                    onClick={() => setIsModalOpen(true)}
                >
                    +
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="flex">
                        {data ? (
                            <pre className="flex max-w-96 w-96 overflow-y-auto max-h-80">
                                {JSON.stringify(data, null, 2)}
                            </pre>
                        ) : (
                            <p>Загрузка данных...</p>
                        )}
                    </div>
                    <input className="border-2 max-w-xs rounded-lg"></input>
                </Modal>
            </div>
        </div>
    );
};

export default Content;
