import Title from "../Title";
import styles from "./ResultsTable.module.css"

const ResultsTable = ({ results, loading }) => {

    if(loading) {
        return <div className={styles.loading}>Results are loading...</div>
    }

    if(!results) {
        return <div className={styles.loading}>No results in the database</div>;
    }

    return (
        <div className={styles.resultsWrapper}>
            <Title>Top 20 all time winners</Title>
            <div className={styles.results}>
                <div className={`${styles.player} ${styles.tableHead}`}>
                    <span>Index</span>
                    <span>Player Name</span>
                    <span>Total Wins</span>
                </div>
                {results.map((player, index) => (
                    <div key={player.id} className={styles.player}>
                        <span>{index}</span>
                        <span>{player.player}</span>
                        <span>{player.wins}</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ResultsTable;