//components imports
import Artworks from "./components/Artworks";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";
import CreateNFT from "./components/CreateNFT";
import ShowNFT from "./components/ShowNFT";
import UpdateNFT from "./components/UpdateNFT";
import Loading from "./components/Loading";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header /> 
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Footer />
      <Loading />
    </div>
  )
}

export default App
