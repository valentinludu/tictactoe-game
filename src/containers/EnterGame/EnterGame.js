import { useCallback } from 'react';
import StartGame from '../../components/StartGame';
import { useGameContext } from "../../hooks/useGameContext";
import { setPlayers, setPlayView } from "../../contexts/actionCreators";

const EnterGame = () => {
    const { state: { players }, dispatch } = useGameContext();

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        const { player1, player2 } = event.target;

        if(player1.value === player2.value) {
            dispatch(setPlayers({ error: "The players should have different names" }));
        } else {
            dispatch(setPlayers({ player1: player1.value, player2: player2.value, error: null }));
            dispatch(setPlayView("PLAY_GAME"));
        }
    }, [dispatch]);

    return <StartGame handleSubmit={handleSubmit} error={players && players.error} />
}

export default EnterGame;