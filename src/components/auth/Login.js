import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"
import { Button} from 'reactstrap';

export const Login = () => {
    const [email, set] = useState("")
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("artist_login", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="form">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>USER DOES NOT EXIST</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section className="login-background">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="title-login">The Artist's Way App</h1>
                    <h6>PLEASE SIGN IN</h6>
                    <fieldset>
                        <input type="email"
                            onChange={evt => set(evt.target.value)}
                            className="form-control email-field"
                            placeholder="EMAIL ADDRESS"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <Button className="button" type="submit">
                            SIGN IN
                        </Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link className="link" to="/register">NOT A MEMBER YET?</Link>
            </section>
        </main>
    )
}