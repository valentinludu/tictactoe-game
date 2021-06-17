import { useGameContext } from "../../hooks/useGameContext";
import EnterGame from "../../containers/EnterGame";
import PlayGame from "../../containers/PlayGame";

const Play = () => {
    const { state: { playView } } = useGameContext();

    
    return (
        <>
            {playView === "ENTER_NAMES" && (
                <EnterGame />
            )}
            {playView === "PLAY_GAME" && (
                <PlayGame />
            )}
            {!playView && (
                <p>An error occured. Please refresh the page</p>
            )}
        </>
    );
};

export default Play;