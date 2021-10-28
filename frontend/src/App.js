import "./App.scss";
import Nav from "./components/nav";
import Hero from "./components/hero";
import PortfolioIntro from "./components/portfolioIntro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <PortfolioIntro />
        <Portfolio />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
