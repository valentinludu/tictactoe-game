import React from 'react';
import GameButton from '../GameButton';
import './StartGame.css';

const StartGame = ({ handleChange, handleSubmit, error }) => (
    <div className="start">
        <div className="info">Start new Game</div>
        <div className="players">
            <form onSubmit={handleSubmit}>
                <label>
                    Choose player 1 name:
                    <input type="text" name="player1" onChange={handleChange} required />
                </label>
                <label>
                    Choose player 2 name:
                    <input type="text" name="player2" onChange={handleChange} required />
                </label>
                <GameButton type="submit">Start Game</GameButton>
            </form>
        </div>
        {error && (
            <p className="error">{error}</p>
        )}
    </div>
);

export default StartGame;