import "./App.scss";
import { StakingScreen } from "./screens/Staking.screen";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "./screens/Home.screen";
import { SwapScreen } from "./screens/Swap.screen";
import { TradingScreen } from "./screens/Trading.screen";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/staking">
            <StakingScreen />
          </Route>
          <Route exact path="/swap">
            <SwapScreen />
          </Route>
          <Route exact path="/trading">
            <TradingScreen />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
