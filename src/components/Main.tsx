import { Route, Switch } from "react-router-dom";
import { FunctionComponent, ReactElement } from "react";
import {
  Home,
  Business,
  Politics,
  Sports,
  NotFound,
  News,
  Entertainments,
} from "module/index";

const Main: FunctionComponent = (): ReactElement => {
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
