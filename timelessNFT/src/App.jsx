//components imports
import Artworks from "./components/Artworks";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header /> 
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
