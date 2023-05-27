import './Login.css'
import { Link } from 'react-router-dom'


export const Login = () => {
    return (
        <article className="login-page">
            <section className="form-title"><h1>SIGN IN</h1></section>
            <section className="login-page-details">
                <form className="login-form" method="POST">
                    <div className="user-details">
                        <input type='text' name="username" placeholder='username'></input>
                    </div>
                    <div className="user-details">
                        <input type='password' name="password" placeholder='password'></input>
                    </div>
                    <div className="form-button">
                            <input type="submit" value="SIGN IN" />
                    </div>
                    <h3 className='account-h3'>Don't have an account? <Link>SIGN UP here</Link></h3>
                </form>
            </section>
        </article>
    )
}