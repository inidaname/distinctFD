import { Route, Switch } from "react-router-dom";
import Home from "../module/Home";
import NotFound from "../module/NotFound";


function Main(): JSX.Element {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
