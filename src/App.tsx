import Navbar from "./components/Navbar";
import Hero from './assets/images/hero.svg'
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <img
        src={Hero}
        alt="Hero" className="w-full h-[250px] object-cover"
      />
      <div className="mt-16 px-6 py-3">
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;