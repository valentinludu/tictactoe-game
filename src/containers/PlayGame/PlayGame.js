import firebase from "../../firebase";
import { useGameContext } from "../../hooks/useGameContext";
import Game from "../../components/Game";

const PlayGame = () => {
    const { state: { players } } = useGameContext();

    const sendWinner = async player => {
        try {
            const collection = await firebase.firestore().collection("results").get();
            const isPlayer = collection.docs.map(doc => ({ ...doc.data(), id: doc.id })).find((item) => item.player === player);

            if(isPlayer && isPlayer.id && isPlayer.wins) {
                firebase.firestore().collection("results").doc(isPlayer.id).set({ player: isPlayer.player, wins: 1 + Number(isPlayer.wins) })
            } else {
                firebase.firestore().collection("results").add({ player: player, wins: 1 })
            }
        } catch(err) {
            console.log(err);
        }
    };
    
    return <Game players={players} sendWinner={sendWinner}  />;
};

export default PlayGame;