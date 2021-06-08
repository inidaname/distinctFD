import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './notfound'

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:blog">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
