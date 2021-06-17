import { useState, useCallback } from 'react';

export const useStart = () => {
    const [players, setPlayers] = useState({
        player1: null,
        player2: null,
        error: null
    });

    const [gameView, setGameView] = useState('Start');

    const handleChange = useCallback((event) => {
        if(event.target.name === 'player1') {
            setPlayers({
                ...players,
                player1: event.target.value
            });
        } else if (event.target.name === 'player2') {
            setPlayers({
                ...players,
                player2: event.target.value
            });
        }
    }, [players, setPlayers]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        if(players.player1 === players.player2) {
            setPlayers({
                ...players,
                error: 'Please select different names for each player'
            });
            return
        }

        setPlayers({
            ...players,
            error: null
        });
        setGameView('Game');
    }, [players, setGameView]);

    return {
        players,
        setPlayers,
        gameView,
        setGameView,
        handleSubmit,
        handleChange
    }
};