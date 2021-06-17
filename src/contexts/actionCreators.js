import { SET_PLAYERS, CLEAR_PLAYERS, SET_PLAY_VIEW } from "./actionTypes";

export const setPlayers = (players) => ({ type: SET_PLAYERS, payload: players });

export const clearPlayers = () => ({ type: CLEAR_PLAYERS });

export const setPlayView = (playView) => ({ type: SET_PLAY_VIEW, payload: playView });