import Navbar from './components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Hero from './components/Hero';
import Drinks from './components/Drinks';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
<main>
  <Navbar />
  <Hero />
<Drinks />
<About />
<Art />
<Menu />
<Contact />
</main>
  )
}

export default App;