import React from 'react';
import { string, func, number } from 'prop-types';
import './square.css';

const Square = props => {
    const { value, onClick, winnerSquare } = props;

    return (
        <button className={`square ${Number.isInteger(winnerSquare) ? 'active' : ''}`} onClick={onClick}>
            {value}
        </button>
    );
};

Square.propTypes = {
    value: string,
    onClick: func,
    winnerSquare: number
};

export default Square;