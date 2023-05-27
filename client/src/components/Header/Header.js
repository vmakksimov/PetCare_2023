import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header-nav">
            <div className='logo'>
                Logo
                <img src="" alt="" />
            </div>
            <ul className="header-elements">
                <li className='header-buttons'><Link to='/'>Home</Link></li>
                <li className='header-buttons'><Link to='/login'>Login</Link></li>
                <li className='header-buttons'><Link to='/register'>Register</Link></li>
                <li className='header-buttons'>Add Pet</li>
                <li className='header-buttons'>Services</li>
            </ul>

        </div>
    )
}