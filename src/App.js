import { useReducer  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Play from './pages/Play';
import Home from './pages/Home';
import Results from './pages/Results';
import Header from "./components/Header"
import GameContext from "./contexts/GameContext";
import { reducer, initialState } from "./contexts/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/play">
            <Play />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </GameContext.Provider>
  );
}

export default App;