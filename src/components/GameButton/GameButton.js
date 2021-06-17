import React from 'react';
import { Link } from "react-router-dom";
import './GameButton.css';

const GameButton = ({ children, type, onClick, to, ...restProps }) => {

    return (
        <>
            {type === "link" ? (
                <Link to={to} className="gameButton" onClick={onClick} {...restProps}>{children}</Link>
            ) : (
                <button
                    className="gameButton"
                    type={type}
                    onClick={onClick}
                    {...restProps}
                >
                    {children}
                </button>
            )}
        </>
    )
};

export default GameButton;