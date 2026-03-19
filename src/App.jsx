import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import PropertyList from "./components/PropertyList";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FilterBar />
      <SearchBar />
      <PropertyList />
    </div>
  );
}

export default App;