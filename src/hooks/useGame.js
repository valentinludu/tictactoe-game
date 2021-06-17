import { useCallback, useEffect, useMemo, useState } from 'react';
import { isBoardFull, Winner } from  '../components/Game/utils';

export const useGame = (players, sendWinner) => {
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);

    const { player1, player2 } = players;

    const nextSymbol = isXNext ? 'X' : 'O'; 
    const nextPlayer = isXNext ? player1 : player2;

    const { winner, lines } = Winner(squares);

    const handleRestartGame = useCallback(() => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    },[setSquares, setIsXNext]);

    const handleSquareClick = useCallback(value => {
        if (squares[value] != null || winner != null) {
            return;
        }

        const nextSquares = [...squares];
        nextSquares[value] = nextSymbol;
        setSquares(nextSquares);

        setIsXNext(!isXNext);
    }, [squares, setSquares, nextSymbol, isXNext, winner]);

    const getStatus = useMemo(() => {
        if (winner) {
            return `Game Winner: ${winner === 'X' ? player1 : player2}`;
        } else if (isBoardFull(squares)) {
            return "Draw";
        } else {
            return `Current player: ${nextPlayer}`;
        }
    }, [winner, nextPlayer, squares, player1, player2]);

    useEffect(() => {
        if(winner) {
            sendWinner(winner === 'X' ? player1 : player2);
        }
    }, [winner, sendWinner, player1, player2]);

    return {
        handleSquareClick,
        handleRestartGame,
        getStatus,
        squares,
        lines,
        gameEnded: winner || isBoardFull(squares)
    }
};