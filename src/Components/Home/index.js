import { Link } from 'react-router-dom'
import Logoo from '../assets/DS1.png'
import Logo from './Logo/index'
import './index.scss'
import '../AnimateLetters/index'
import { useEffect, useState } from 'react'
import AnimateLetters from '../AnimateLetters/index'

const Home = () => {
  const [letterClassname, setLetterClassname] = useState('text_animate')
  const hi = ['H', 'i']
  const iam = ['I', "'", 'm']
  const nameArray = ['S', 'w', 'a', 'r', 'u', 'p']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'l', 'o', 'p', 'e', 'r']
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLetterClassname('text_animate_hover');
    }, 4000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters
            letterClassname={letterClassname}
            charArray={hi}
            idx={10}
          />
          <br />
          <AnimateLetters
            letterClassname={letterClassname}
            charArray={iam}
            idx={12}
          />
          &nbsp;
          <img src={Logoo} alt="dev" />
          &nbsp;
          <AnimateLetters
            letterClassname={letterClassname}
            charArray={nameArray}
            idx={15}
          />
          <br />
          <AnimateLetters
            letterClassname={letterClassname}
            charArray={jobArray}
            idx={21}
          />
        </h1>
        <h2>FrontEnd Developer/React JS/Firebase</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
  )
}
export default Home
