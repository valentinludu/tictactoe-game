import { useContext } from "react";
import GameContext from "../contexts/GameContext";

export const useGameContext = () => {
    const context = useContext(GameContext);

    if(context === undefined) {
        throw Error("useGameContext must be used inside GameContext.Provider");
    }
    
    return context;
}