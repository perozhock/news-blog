import React from "react";
import { NavItems } from "../types/navItems";

interface NavigationProps {
    category: string;
    setCategory: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ category, setCategory }) => {
    return (
        <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-center space-x-4">
                {NavItems.map((item) => (
                    <li key={item.key}>
                        <button onClick={() => setCategory(item.key)}>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
