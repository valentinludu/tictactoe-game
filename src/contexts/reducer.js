import { SET_PLAYERS, CLEAR_PLAYERS, SET_PLAY_VIEW } from "./actionTypes";

export const initialState = {
    playView: "ENTER_NAMES",
};

export const reducer = (state, action) => {
    switch (action.type) {
      case SET_PLAYERS:
        return {
          ...state,
          players: action.payload
        };
      case CLEAR_PLAYERS:
        return {
          ...state,
          players: null
        };
      case SET_PLAY_VIEW:
        return {
            ...state,
            playView: action.payload
        }
      default:
        return state;
    }
  };