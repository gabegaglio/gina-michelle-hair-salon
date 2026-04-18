import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Hours />
      <Reviews />
      <Contact />
      <footer className="bg-[#1e3a5f] py-12 text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <p
            className="text-3xl font-normal text-white mb-3"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Gina Michele
          </p>
          <p
            className="text-white/80 text-sm font-light"
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            &copy; 2024 Gina Michele Hair Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
