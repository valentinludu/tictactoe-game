import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
    const menuItems = ["Play", "Results"];

    return (
        <div className={styles.menu}>
            {menuItems.map(item => (
                <Link to={item.toLowerCase()} key={item}>{item}</Link>
            ))}
        </div>
    );
};

export default Header;