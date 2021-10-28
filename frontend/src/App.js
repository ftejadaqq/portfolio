import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Hero />
      </header>
    </div>
  );
}

export default App;
