import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from './components/Header';
import Main from "./components/Main";

function App (): JSX.Element {
    return(
        <Router>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </Router>
    )
}

export default App