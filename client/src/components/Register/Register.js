import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import * as AuthService from '../../services/authService'
import * as PetsService from '../../services/petsService'
import { AuthContext } from '../context/AuthContext'


export const Register = () => {
    const [shownPassword, setShownPassword] = useState('password')
    const [shownRePassword, setShownRePassword] = useState('password')
    const [passwordInput, setPasswordInput] = useState("");
    const [rePasswordInput, setRePasswordInput] = useState("");
    const {userLogin} = useContext(AuthContext)
    
    const navigate = useNavigate()
    const [errors, setError] = useState({})
    const [values, setValues] = useState({
        checkbox: '',
        username: '',
        exists: '',
    })
    const handlePasswordChange = (evnt) => {
        evnt.preventDefault();
        if (evnt.target.name === 'password') {
            setPasswordInput(evnt.target.value);
        } else {
            setRePasswordInput(evnt.target.value)
        }
    }

    const togglePassword = (e) => {
        if (e.target.parentElement.parentElement.children[0].name === 'password') {
            if (shownPassword === 'password') {

                setShownPassword('text')

            } else {
                setShownPassword('password')
            }
        } else {

            if (shownRePassword === 'password') {
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
            [e.target.name]: e.target.value
        }))
    }

    const validationHandler = (e) => {
        e.preventDefault();
        // const data = Object.fromEntries(new FormData(e.target))
        // console.log(data.username)
        console.log(e.target)

        // if (values.checkbox !== 'on') {
        //     setError({
        //         [e.target.name]: values[e.target.name]
        //     })
        PetsService.getUsers()
            .then(res => {
                let currentUser = res.find(x => x.username === e.target.value)
                if (e.target.name === 'username'){
                    if (e.target.value.length < 2){
                        console.log('here')
                        setError({
                            [e.target.name]: values[e.target.name]
                        })
                    }else if (currentUser){
                        setError({
                            exists: values[e.target.name]
                        })
                    }else{
                        setError({})
                    }
                }
                
            })
        
      

        
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        if (data.checkbox) {
            setError({})
        } else {
            setError({
                checkbox: 'checkbox'
            })
            return;
        }

        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')
        const username = formData.get('username')
        const first_name = formData.get('first_name')
        const last_name = formData.get('last_name')
        const password2 = formData.get('re_password')

        // PetsService.getUsers()
        // .then(res => {
        //     console.log(res)
        // })

        AuthService.register(username, email, first_name, last_name, password, password2)
            .then(res => {
                userLogin(res)
                navigate('/')
            })

            .catch(() => {
                navigate('/')
            })
    }

    return (
        <article className='daycare-registration-image'>
            <section className="daycare-registration">
                <article className="form-title"><h1>CREATE ACCOUNT</h1></article>
                <article className="daycare-form">
                    <form className='form' action="POST" onSubmit={onSubmitForm} >
                        <div className="user-details">
                            <input type="text" name="username" placeholder="Username" onChange={onChangeHandler} values={values.username} onBlur={(e) => validationHandler(e)} ></input>
                            {errors.username && <p>The username must be longer than 2 characters</p>}
                            {errors.exists && <p>Username already exists!</p>}
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
                        <h3 className='account-h3'>Have already an account? <Link to='/login'>Login here</Link></h3>
                    </form>

                </article>

            </section>
        </article>
    )
}