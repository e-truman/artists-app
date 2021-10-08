import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"
import { Button } from 'reactstrap';

export const Register = (props) => {
    const [user, setUser] = useState({})
    const conflictDialog = useRef()

    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`https://artists-api-f85cm.ondigitalocean.app/users?email=${user.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("artist_login", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>ACCOUNT WITH THAT EMAIL ALREADY EXISTS</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>


            <section className="login-background register-background">
                <form className="form--login" onSubmit={handleRegister}>
                    <h1 className="h6 mb-3 font-weight-normal">REGISTER FOR THE ARTIST'S WAY APP</h1>

                    <fieldset>
                        <input onChange={updateUser} type="email" size="20" id="email" className="form-control entry-field" placeholder="EMAIL ADDRESS" required />
                    </fieldset>
                    <fieldset>
                        <input onChange={updateUser} type="text" size="20" id="name" className="form-control entry-field" placeholder="FULL NAME" required />
                    </fieldset>

                    <fieldset>
                        <Button type="submit"> REGISTER </Button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}

