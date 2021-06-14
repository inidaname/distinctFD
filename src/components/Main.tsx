import { Route, Switch } from "react-router-dom";
import Business from "../module/Business";
import Entertainments from "../module/Entertainments";
import Home from "../module/Home";
import News from "../module/News";
import NotFound from "../module/NotFound";
import Politics from "../module/Politics";
import Sports from "../module/Sports";


function Main(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/business">
        <Business></Business>
      </Route>
      <Route exact path="/politics">
        <Politics></Politics>
      </Route>
      <Route exact path="/entertainments">
        <Entertainments></Entertainments>
      </Route>
      <Route exact path="/news">
        <News></News>
      </Route>
      <Route exact path="/sports">
        <Sports></Sports>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  );
}

export default Main;
