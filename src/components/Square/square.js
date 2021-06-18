import React from 'react';
import './square.css';

const Square = props => {
    const { value, onClick, winnerSquare } = props;

    return (
        <button className={`square ${Number.isInteger(winnerSquare) ? 'active' : ''}`} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;