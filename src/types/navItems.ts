export interface NavItem {
    name: string;
    key: string;
}

export const NavItems: NavItem[] = [
    { name: 'Все новости', key: 'general'},
    { name: 'Бизнес', key: 'business'},
    { name: 'Развлечения', key: 'entertainment'},
    { name: 'Здоровье', key: 'health'},
    { name: 'Наука', key: 'science'},
    { name: 'Спорт', key: 'sports'},
    { name: 'Технологии', key: 'technology'},
];