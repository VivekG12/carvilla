import './App.css';
import { ServiceSection } from './Section/ServiceSection';
import { Home } from './Section/Home';
import { FeaturedCar } from './Section/FeaturedCar';
import { NewCar } from './Section/NewCar';
import { Clients } from './Section/Clients';
import { Brands } from './Section/Brands';

function App() {
  return (
    <div className="App">
      <Home />
      <ServiceSection />
      <NewCar />
      <FeaturedCar />
      <Clients />
      <Brands />
    </div>
  );
}

export default App;
