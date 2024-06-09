import './App.css';
import { Navbar, Overlay, Home, About, Services, Products, ContactUs } from './components';
import LazyLoadSection from './components/LazyLoadSection';


function App() {
  return (
    <div className="App">
      <Overlay />
      <Navbar />
      <Home />
      <LazyLoadSection>
        <About />
      </LazyLoadSection>
      <Services />
      <Products />
      <ContactUs />
    </div>
  );
}

export default App;
