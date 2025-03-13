import './Navbar.css';
import './Categories.css';
import './Bannerslider.module.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Bannerslider from './components/Bannerslider';
import CardSection from './components/trial';
import Banner from './components/Banner';

function App() {
  return (
    <>
       <Navbar/>
       <Categories/>
       <Bannerslider/>
       <CardSection/>
       <Banner/>
    </>
  );
}

export default App;
