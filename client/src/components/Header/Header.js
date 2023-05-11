import './Header.css'

export const Header = ( ) => {
    return (
        <div className="header-nav">
            <div className='logo'>
                Logo
                <img src="" alt="" />
            </div>
            <ul className="header-elements">
                <li className='header-buttons'>Home</li>
                <li className='header-buttons'>Login</li>
                <li className='header-buttons'>Register</li>
                <li className='header-buttons'>Add Pet</li>
                <li className='header-buttons'>Services</li>
            </ul>
            
        </div>
    )
}