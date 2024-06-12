import './App.css';
import { Navbar, Overlay, Home, About, Services, Products, ContactUs } from './components';


function App() {
  return (
    <div className="App">
      <Overlay />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <ContactUs />
    </div>
  );
}

export default App;
