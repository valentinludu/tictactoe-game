import MenuItem from "../MenuItem";

import styles from "./Header.module.css";

const Header = () => {
    const menuItems = ["Play", "Results"];

    return (
        <div className={styles.menu}>
            {menuItems.map(item => (
                <MenuItem to={item.toLowerCase()} key={item}>{item}</MenuItem>
            ))}
        </div>
    );
};

export default Header;