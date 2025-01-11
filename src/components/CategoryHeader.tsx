import React from "react";
import { NavItem } from "../types/navItems";

interface CategoryHeaderProps {
    category: string;
    navItems: NavItem[];
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category, navItems }) => {
    const currentNavItem = navItems.find(item => item.key === category);
    
    return (
        <header className="flex-shrink-0 w-36">
            <h1 className="font-bold text-2xl">{currentNavItem?.name}</h1>
        </header>
    )
}

export default CategoryHeader;