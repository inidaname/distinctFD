import { FunctionComponent, ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "components/Main";

const App: FunctionComponent = (): ReactElement => {
  return (
    <Router>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
