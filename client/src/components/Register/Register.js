import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Register.css'

export const Register = () => {
    const [shownPassword, setShownPassword] = useState('password')
    const [shownRePassword, setShownRePassword] = useState('password')
    const [passwordInput, setPasswordInput] = useState("");
    const [rePasswordInput, setRePasswordInput] = useState("");
    const [errors, setError] = useState({})
    const [values, setValues] = useState({
        checkbox: '',
    })
    const handlePasswordChange = (evnt) => {
        evnt.preventDefault();
        if (evnt.target.name == 'password'){
            setPasswordInput(evnt.target.value);
        }else {
            setRePasswordInput(evnt.target.value)
        }
    }

    const togglePassword = (e) => {
        if (e.target.parentElement.parentElement.children[0].name == 'password'){
            if (shownPassword == 'password') {
              
                setShownPassword('text')
    
            } else {
                setShownPassword('password')
            }
        }else{
         
            if (shownRePassword == 'password') {
                setShownRePassword('text')
    
            } else {
                setShownRePassword('password')
            }
        }
      
    };

    const onChangeHandler = (e) => {
        e.preventDefault();
        setValues(state => ({
            ...state,
            [e.targe.name]: e.target.value
        }))
    }

    const validationHandler = (e) => {
        e.preventDefault();
        console.log(e.target)
        console.log(e)
        if (values.checkbox !== 'on') {
            setError({
                [e.target.name]: values[e.target.name]
            })
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        if (data.checkbox) {
            setError({})
        } else {
            setError({
                ['checkbox']: 'checkbox'
            })
            return;
        }

    }

    return (
        <article className='daycare-registration-image'>
            <section className="daycare-registration">
                <article className="form-title"><h1>CREATE ACCOUNT</h1></article>
                <article className="daycare-form">
                    <form className='form' action="POST" onSubmit={onSubmitForm} >
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
                                {shownPassword === 'password' ? <i className="fa-solid fa-eye" onClick={togglePassword}></i> : <i className="fa-regular fa-eye-slash" onClick={togglePassword}></i>}
                            </div>
                        </div>

                        <div className="user-details">

                            <input type={shownRePassword} onChange={handlePasswordChange} value={rePasswordInput} name="re_password" placeholder="Confirm Password" ></input>
                            <div className='showspass'>
                                {shownRePassword === 'password' ? <i className="fa-solid fa-eye" onClick={togglePassword}></i> : <i className="fa-regular fa-eye-slash" onClick={togglePassword}></i>}
                            </div>



                        </div>
                        <div className="confirm-form">
                            <input type="checkbox" name="checkbox" />
                            <p>I agree with T&C</p>
                        </div>
                        {errors.checkbox &&
                            <p className="form-error" style={{ color: 'red' }}>
                                You must agree with T&C!
                                {console.log(values)}
                            </p>
                        }
                        <div className="form-button">
                            <input type="submit" value="SIGN UP" />
                        </div>
                        <h3 className='account-h3'>Have already an account? <Link>Login here</Link></h3>
                    </form>

                </article>

            </section>
        </article>
    )
}