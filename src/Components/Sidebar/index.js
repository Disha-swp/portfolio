import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faMailBulk,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/DS1.png'
import './index.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
          <h2 className="" style={{ textAlign: 'center', color: 'gold' }}>
            Disha
          </h2>
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="grey" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="grey" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="grey" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target="_blank"
              rel="noreferrer"
              href='https://www.linkedin.com/in/disha-swarup-810a06197/'>
                <FontAwesomeIcon icon={faLinkedin} color='grey'/>                  
            </a>
          </li>
          <li>
            <a target="_blank"
              rel="noreferrer"
              href='https://github.com/Disha-swp'>
                <FontAwesomeIcon icon={faGithub} color='grey'/>                  
            </a>
          </li>
          <li>
            <a target="_blank"
              rel="noreferrer"
              href='mailto:dishaswarup@gmail.com'>
                <FontAwesomeIcon icon={faMailBulk} color='grey'/>                  
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Sidebar
