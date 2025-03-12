import './Navbar.css';
import './Categories.css';
import './Explore.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Banner from './components/Banner';
import Explore from './components/Explore';
import CardSection from './components/trial';

function App() {
  return (
    <>
       <Navbar/>
       <Categories/>
       <Banner/>
       <Explore/>
       <CardSection/>
    </>
  );
}

export default App;
