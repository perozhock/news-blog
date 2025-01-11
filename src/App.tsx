import "./App.css";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import CategoryHeader from "./components/CategoryHeader";
import { NavItems } from "./types/navItems";
import { useState } from "react";

function App() {
    const [category, setCategory] = useState<string>("general");

    return (
        <div className="h-screen w-screen p-5">
            <div className="h-full flex flex-col items-center justify-start border shadow-md rounded-2xl">
                <div className="flex min-h-14 items-center justify-between rounded-2xl border shadow-md w-full p-5">
                    <CategoryHeader category={category} navItems={NavItems} />
                    <Navigation category={category} setCategory={setCategory} />
                </div>
                <Content category={category}/>
            </div>
        </div>
    );
}

export default App;
