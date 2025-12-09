import { NavLink } from "react-router-dom";

export default function AppHeader() {
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About us",
            path: "/about-us",
        },
        {
            title: "Products",
            path: "/products",
        },
    ];


    return (
        <header>
            <ul className="flex-between">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                ))}
            </ul>
        
        </header>
    );
}