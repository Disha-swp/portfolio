import { Link } from 'react-router-dom'
import Logo from '../assets/DS1.png'
import "./index.scss"
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm&nbsp;
          <img src={Logo} alt="dev" />&nbsp;swarup
          <br />
          web developer
        </h1>
        <h2>FrontEnd Developer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}
export default Home
