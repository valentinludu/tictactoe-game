import { useResults } from "../../hooks/useResults";
import ResultsTable from "../../components/ResultsTable";

const PlayersResults = () => {
    const { loading, results } = useResults(); 

    return <ResultsTable results={results} loading={loading} />;
};

export default PlayersResults;