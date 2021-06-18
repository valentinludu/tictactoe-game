import React from 'react';
import GameButton from '../GameButton';
import Title from '../Title';
import styles from './StartGame.module.css';

const StartGame = ({ handleChange, handleSubmit, error }) => (
    <div className={styles.start}>
        <Title>Start new Game</Title>
        <div className={styles.players}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="player1" className={styles.playerLabel}>Choose player 1 name:</label>
                <input type="text" name="player1" onChange={handleChange} required className={styles.playerInput} />
                <label htmlFor="player2" className={styles.playerLabel}>Choose player 2 name:</label>
                <input type="text" name="player2" onChange={handleChange} required className={styles.playerInput} />
                <GameButton type="submit">Start Game</GameButton>
            </form>
        </div>
        {error && (
            <p className={styles.error}>{error}</p>
        )}
    </div>
);

export default StartGame;