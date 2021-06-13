import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from "./components/Main";

function App (): JSX.Element {
    return(
        <Router>
            <Header></Header>
            <Main></Main>
        </Router>
    )
}

export default App