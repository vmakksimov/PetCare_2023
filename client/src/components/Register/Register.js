import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Register.css'

export const Register = () => {
    const [shownPassword, setShownPassword] = useState('password')
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        evnt.preventDefault();
        setPasswordInput(evnt.target.value);
    }

    const togglePassword = () => {
        if (shownPassword == 'password') {
            setShownPassword('text')
            return
        }

        setShownPassword('password')
        return
    };

    return (
        <article className='daycare-registration-image'>
            <section className="daycare-registration">
                <article className="daycare-registration-title"><h1>CREATE ACCOUNT</h1></article>
                <article className="daycare-form">
                    <form className='form' action="#">
                        <div className="user-details">
                            <input type="text" name="username" placeholder="Username"></input>
                        </div>
                        <div className="user-details">
                            <input type="text" name="email" placeholder="Email"></input>
                        </div>
                        <div className="user-details">
                            <input type="text" name="first_name" placeholder="First Name"></input>
                        </div>
                        <div className="user-details">
                            <input type="text" name="last_name" placeholder="Last Name"></input>
                        </div>
                        <div className="user-details">
                            <input type={shownPassword} onChange={handlePasswordChange} value={passwordInput} name="password" placeholder="Password"></input>
                            <div className='showspass'>
                                <button onClick={togglePassword}>{shownPassword === 'password' ? <i className="fa-solid fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}</button>
                            </div>
                        </div>

                        <div className="user-details">

                            <input type='password' name="re_password" placeholder="Confirm Password" ></input>


                        </div>
                        <div className="confirm-form">
                            <input type="checkbox" />
                            <p>I agree with T&C</p>
                        </div>
                        <div className="form-button">
                            <input type="submit" value="SIGN UP" />
                        </div>
                        <h3>Have already an account? <Link>Login here</Link></h3>
                    </form>

                </article>

            </section>
        </article>
    )
}