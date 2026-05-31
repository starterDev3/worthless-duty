import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import { navLinks } from '../constants/index.js';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger, SplitText);


const Navbar = () => {
useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    }
  });

  navTween.fromTo('nav', { backgroundColor: 'transparent'},{
    backgroundColor: '#00000050',
    backFilter: 'blur(10px)',
    duration: 0.5,
    ease: 'power1.inOut',

  });
})

  return (
  <nav>
    <div>
      <a href="#home" className="flex items-center gap-2">
<img src="/images/logo.png" alt="logo" />
<p>AGAHAGAGGGAGAGAAGA</p>
      </a>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;