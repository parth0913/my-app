import './Navbar.css';
import './Categories.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Banner from './components/Banner';
import CardSection from './components/trial';

function App() {
  return (
    <>
       <Navbar/>
       <Categories/>
       <Banner/>
       <CardSection/>
    </>
  );
}

export default App;
