import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const App = ()=>{
  return(
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      {/* here we are going to add all the components for the portfolio */}
    </div>
  )
};
export default App;