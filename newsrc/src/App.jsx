import "./tokens.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Thesis from "./components/Thesis";
import Beats from "./components/Beats";
import Quotes from "./components/Quotes";
import Pillars from "./components/Pillars";
import EssayCard from "./components/EssayCard";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Thesis />
        <hr className="rule" />
        <Beats />
        <Quotes />
        <hr className="rule" />
        <Pillars />
        <EssayCard />
        <hr className="rule" />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
