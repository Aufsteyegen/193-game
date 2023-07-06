import * as React from "react"
import axios from "axios"
import { useState } from 'react'
import "./Navbar.css"
import jwt_decode from 'jwt-decode'

export default function Navbar({ wins, totalGuesses, correctGuesses, bestWinTime,
                                 longestStreak, setLongestStreak, setPlay, play,
                                 setTimerSeconds, showLogin, setShowLogin,
                                 showSignup, setShowSignup, loggedIn, setLoggedIn,
                                 registered, setRegistered, updateStatus }) {
    const [incorrectConfirmation, setIncorrectConfirmation] = useState(true)
    const [showInfo, setShowInfo] = useState(false)

    const [loginError, setLoginError] = useState(false)

    const [registrationError, setRegistrationError] = useState(false)
    const [showRegistrationError, setShowRegistrationError] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    async function handleLogin(event) {
        event.preventDefault()
        if (loginPassword.length >= 10 && loginEmail.length >= 3) {
            try {
                const loginData = {
                    email: loginEmail,
                    password: loginPassword
                }
                const response = await axios.post('http://localhost:3000/login', loginData)
                const token = response.data.token
                const decodedToken = jwt_decode(token)

                const { email, wins, total_guesses, correct_guesses, longest_streak } = decodedToken

                localStorage.setItem('email', email)
                localStorage.setItem('wins', wins)
                localStorage.setItem('totalGuesses', total_guesses)
                localStorage.setItem('correctGuesses', correct_guesses)
                localStorage.setItem('longestStreak', longest_streak)

                localStorage.setItem('token', token)
                setLoggedIn(true)
            } catch (error) {
                setLoginError(true)
                console.log(error)
                throw error
            }
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if (password === confirmPassword && password.length >= 10 && email.length >= 3) setIncorrectConfirmation(false)
        if (incorrectConfirmation) {
            try {
                const userData = {
                    email: email,
                    password: password,
                    wins: wins,
                    totalGuesses: totalGuesses,
                    correctGuesses: correctGuesses,
                    longestStreak: longestStreak
                }
                const response = await axios.post('http://localhost:3000/register', { userData })
                
                console.log('User registered successfully:', response.data)
                setRegistered(true)
              } catch (error) {
                setRegistrationError(true)
                setShowRegistrationError(error)
                console.error('An error occurred while registering the user:', error)
                throw error
              }
            }
        }
    return (
        <div>
        <div className="navbar">
            <div className="title">
                <h1>193.github.io</h1>
            </div>
            <div className="class-divider"></div>
            <div className="user-stats">
                <div>Wins: {wins}</div>
                <div>Total guesses: {totalGuesses}</div>
                <div>Correct guesses: {correctGuesses}</div>
            </div>
            <div className="user-stats">
                <div>Longest streak: {longestStreak}</div>
                <div>Best win time: {bestWinTime}</div>
                <div>Accuracy: {totalGuesses > 0 ? ((correctGuesses / totalGuesses) * 100).toFixed(2) : 100}%</div>
            </div>
            <div className="data-sync">Data sync status: {!loggedIn ? "Not logged in" : updateStatus === "" || play ? "—" : updateStatus}</div>
            {play && <div title="Stop game" className="stop-button"><i class='bx bxs-square' onClick={() => {setPlay(false), setTimerSeconds(60)}}></i></div>}
            <div className="game-info">
                <button onClick={() => {setShowInfo(!showInfo)}}>?</button>
            </div>
            <div className="load-user-data">
                <button onClick={() => {setShowLogin(!showLogin)}}>{loggedIn ? "Erase data" : "Load data"}</button>
            </div>
            <div className={`user-data ${loggedIn ? 'logged-in' : ""}`}>
                <button onClick={() => {setShowSignup(!showSignup)}}>Save data</button>
            </div>
        </div>

        <div className="register-box-wrapper">
            {(showLogin && !loggedIn) && (
                <div className="register-box">
                    <div className="register-close-button" onClick={() => {setShowLogin(false)}}>—</div>
                    <form onSubmit={handleLogin}>

                        <label htmlFor="login-email">Email*</label>
                        <input className={`${loginEmail.length < 3 || loginEmail[0] === "@" || !loginEmail.includes("@") ? "incorrect-confirmation" : ""}`} name="login-email" value={loginEmail} onChange={(event) => {setLoginEmail(event.target.value)}} required />
                        {loginEmail.length < 3 || loginEmail[0] === "@" ? <div className="password-requirement">Invalid email</div> : ""}
                        
                        <label htmlFor="login-password">Password*</label>
                        <input type="password" className={`${loginPassword.length < 10 ? "incorrect-confirmation" : ""}`} name="login-password" value={loginPassword} onChange={(event) => {setLoginPassword(event.target.value)}} required />
                        {loginPassword.length < 10 && <div className="password-requirement">Password is at least 10 characters</div>}

                        <button className="submit-button" type="submit" onClick={handleLogin}>Submit</button>
                    </form>
                </div>
            )}
        </div>

        <div className="register-box-wrapper">
            {(showSignup && !registered) && (
                <div className="register-box">
                    <div className="register-close-button" onClick={() => {setShowSignup(false)}}>—</div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email*</label>
                        <input name="email" className={`${email.length < 3 || email[0] === "@" || 
                        !loginEmail.includes("@")? "incorrect-confirmation" : ""}`} 
                        type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} required />
                        {(email.length < 3 || email[0] === "@") && 
                            <div className="password-requirement">Enter a valid email address</div>}
                        
                        <label htmlFor="password">Password*</label>
                        <input className={`${password.length < 10 ? "incorrect-confirmation" : ""}`} 
                        name="password" type="password" value={password} 
                        onChange={(event) => {setPassword(event.target.value)}} required />
                        {password.length < 10 && 
                            <div className="password-requirement">Password must be at least 10 characters</div>}
                        
                        <label htmlFor="confirm-password">Confirm password*</label>
                        <input className={`${password !== confirmPassword || 
                        confirmPassword.length == 0 ? "incorrect-confirmation" : ""}`} 
                        name="confirm-password" type="password" value={confirmPassword} 
                        onChange={(event) => {setConfirmPassword(event.target.value)}} required />
                        {password !== confirmPassword && 
                            <div className="password-requirement">Password confirmation does not match</div>}

                        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            )}

            {(registered && showSignup) && (
                <div className="register-box">
                    <div className="register-close-button" onClick={() => {setShowSignup(false)}}>—</div>
                    <div className="confirmed-registration">
                        <div><i className="bx bx-check"></i></div>
                        <div className="confirm-text">Your data is being backed up successfully. It will sync with the server at the end of each session so long as you are authenticated.</div>
                        <button className="submit-button" onClick={() => {setShowSignup(false)}}>OK</button>
                    </div>
                </div>    
            )}

            {(showSignup && registrationError) && (
                <>
                    <div className="register-close-button" onClick={() => 
                        {setRegistrationError(false), setShowSignup(false)}}>—</div>
                    <div className="register-box">An error occured: {showRegistrationError}</div>
                    <button className="submit-button" type="submit" 
                    onClick={setRegistrationError(false)}>Go back and try again?</button>
                </>
            )}

        </div>
        </div>
    )
}