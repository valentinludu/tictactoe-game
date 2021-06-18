import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";

const MenuItem = ({ to, children, ...restProps }) => {
    return <Link to={to} className={styles.menuItem} {...restProps}>{children}</Link>;
};

export default MenuItem;