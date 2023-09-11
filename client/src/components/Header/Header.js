import './Header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export const Header = () => {

    const { user, itemCount, setItemCount } = useContext(AuthContext);

    const badgeClick = () => {
        console.log('badge click')
    }

    return (
        <div className="header-nav">
            <div className='logo'>
                Logo
                <img src="" alt="" />
            </div>
            <ul className="header-elements">
                <li className='header-buttons'><Link to='/'>Home</Link></li>
                {user.accessToken
                    && <>
                        <li className='header-buttons'><Link to='/mypets'>My Pets</Link></li>
                        <li className='header-buttons'><Link to='/create-pet'>Add Pet</Link></li>
                        <li class="header-buttons">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Day Care</a></li>
                                <li><a class="dropdown-item"><Link to='/services/grooming'>Grooming</Link></a></li>
                                <li><a class="dropdown-item" href="#">Veterinary</a></li>
                            </ul>
                        </li>
                        <li className='header-buttons'><Link to='/logout'>Logout</Link></li>


                        <span className='greeting-span'>Welcome, {user.username}</span>
                        <Badge color="secondary" className='badge' badgeContent={itemCount}>
                            <ShoppingCartIcon onClick={badgeClick}/>{" "}
                        </Badge>
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