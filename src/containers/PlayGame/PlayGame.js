import { useCallback } from "react";
import { useGameContext } from "../../hooks/useGameContext";
import Game from "../../components/Game";

const PlayGame = () => {
    const { state: { players } } = useGameContext();

    const sendWinner = useCallback(player => {
        //  Send the winner to db
    }, []);
    
    return <Game players={players} sendWinner={sendWinner}  />;
};

export default PlayGame;