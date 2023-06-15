import './Header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="header-nav">
            <div className='logo'>
                Logo
                <img src="" alt="" />
            </div>
            <ul className="header-elements">
                <li className='header-buttons'><Link to='/'>Home</Link></li>
                {user.accessToken 
                && <><li className='header-buttons'>Add Pet</li>
                    <li className='header-buttons'>Services</li>
                    </>
                }
                {!user.accessToken && <>
                 <li className='header-buttons'><Link to='/login'>Login</Link></li>
                 <li className='header-buttons'><Link to='/register'>Register</Link></li>
                 </>
                }
                
                
            
                
                
            </ul>

        </div>
    )
}