import React, { Fragment } from 'react';
import Square from '../Square';
import GameButton from '../GameButton';
import Title from "../Title";
import { useGame } from '../../hooks/useGame';
import styles from './Game.module.css';

const Game = ({ players, sendWinner }) => {
    const { handleSquareClick, handleRestartGame, getStatus, squares, lines = [], gameEnded } = useGame(players, sendWinner);

    const renderSquare = (i) => {
        const winnerSquare = lines.find(item => item === i);
        return <Square
            value={squares[i]}
            onClick={() => handleSquareClick(i)}
            winnerSquare={winnerSquare}
        />;
    };

    return (
        <div className={styles.game}>
            <Title>{getStatus}</Title>
            <div className={styles.body}>
                <div className={styles.board}>
                    {squares.map((square, index) => (
                        <Fragment key={`${square}-${index}`}>
                            {renderSquare(index)}
                        </Fragment>
                    ))}
                </div>
                {gameEnded && (
                    <div className={styles.buttons}>
                        <GameButton type="button" onClick={handleRestartGame}>Restart Game</GameButton>
                        <GameButton type="link" to="/results">See results</GameButton> 
                    </div>
                )}
            </div>
        </div>
    )
};

export default Game;