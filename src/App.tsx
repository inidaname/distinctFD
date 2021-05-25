import Navbar from './Navbar';
import Home from './home';

function App(): JSX.Element {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <Home></Home>
    </div>
  );
}

export default App;
