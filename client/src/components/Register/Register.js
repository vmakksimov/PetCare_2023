import './Register.css'

export const Register = () => {
    return (
        <section className="daycare-registration">
            <article className="daycare-registration-title">Registration</article>
            <article className="daycare-form">
                <form action="#">
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
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                    <div className="user-details">
                        <input type="password" name="re_password" placeholder="Confirm Password"></input>
                    </div>
                    <div className="confirm-form">
                        <input type="checkbox" />
                        <p>I agree with T&C</p>
                    </div>
                    <div className="form-button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </article>

        </section>
    )
}