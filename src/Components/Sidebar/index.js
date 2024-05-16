import { Link } from 'react-router-dom';
import { BellIcon } from '@heroicons/react/outline';
import { ReactComponent as MySVG } from './Logo.svg';
import './index.scss';

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className='logo' to='/'>
            <MySVG/>
        </Link>
      </div>
    </>
  )
}
export default Sidebar
