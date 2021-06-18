import { useState, useEffect, useCallback } from "react";
import firebase from "../firebase";

export const useResults = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState();

    const getResults = useCallback(async () => {
        setLoading(true);
        try {
            const collection = await firebase.firestore().collection("results").orderBy("wins", "desc").limit(20).get(); 
            const playersResults = collection.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setResults(playersResults);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }, [setLoading, setResults]);

    useEffect(() => {
        getResults();
    }, [getResults]);

    return { results, loading };
}