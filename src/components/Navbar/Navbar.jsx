import * as React from "react"
import axios from "axios"
import { useState } from 'react'
import "./Navbar.css"
import jwt_decode from 'jwt-decode'

export default function Navbar({ wins, totalGuesses, setTotalGuesses, setCorrectGuesses, correctGuesses, bestWinTime,
                                 longestStreak, setLongestStreak, setPlay, play,
                                 setTimerSeconds, showLogin, setShowLogin,
                                 showSignup, setShowSignup, loggedIn, setLoggedIn,
                                 registered, setRegistered, updateStatus, setWins }) {
    const [incorrectConfirmation, setIncorrectConfirmation] = useState(true)
    const [showInfo, setShowInfo] = useState(false)

    const [showEraseData, setShowEraseData] = useState(false)

    const [loginError, setLoginError] = useState(false)
    const [showLoginError, setShowLoginError] = useState("")

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
                console.log(loginEmail)
                console.log(loginPassword)
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

                setTotalGuesses(total_guesses)
                setCorrectGuesses(correct_guesses)
                setWins(wins)
                setLongestStreak(longest_streak)
                setLoggedIn(true)
                location.reload()
            } catch (error) {
                setShowLoginError(error.response.data.message)
                setLoginError(true)
                console.log(error)
                throw error
            }
        }
    }

    async function handleLogout() {
        location.reload()
        localStorage.removeItem('token')
        localStorage.removeItem('wins')
        localStorage.removeItem('totalGuesses')
        localStorage.removeItem('longestStreak')
        localStorage.removeItem('correctGuesses')
        localStorage.removeItem('email')
        setLoggedIn(false)
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
                const response = await axios.post('http://localhost:3000/register', userData)
                
                console.log('User registered successfully:', response.data)
                setRegistered(true)
              } catch (error) {
                setRegistrationError(true)
                
                setShowRegistrationError(error.response.data)
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
                <button onClick={!loggedIn ? () => {setShowLogin(!showLogin)} : () => {setShowEraseData(!showEraseData)}}>{loggedIn ? "Log out" : "Load data"}</button>
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
                        {loginError && (
                            <div>Error: {showLoginError}</div>
                        )}
                        <button className="submit-button" type="submit" onClick={handleLogin}>Submit</button>
                        
                    </form>
                    
                </div>
            )}
        </div>
        {showInfo && (
        <div className="register-box-wrapper">
        <div className="register-box-info">
        <div className="register-close-button" onClick={() => {setShowInfo(false)}}>—</div>
        <h2>Challenge your geography knowledge!</h2>Given a country flag, choose the correct country outline from a set of four outlines. Get a streak of 193 to win.<div className="info-divider"></div>
        <h2>How to play</h2>A 60-second timer starts once [play] or the [1] key is pressed. If the correct outline is chosen on the first guess, your streak will increase by one and five seconds will be added to the timer. The timer will never exceed 60 seconds.<div className="info-divider"></div>
        <h2>Game stats</h2>The following stats are recorded: wins, total guesses, correct guesses, longest streak, best win time, and accuracy. These will be saved to your browser&apos;s local storage by default (meaning that it will persist across refreshes and browser restarts for a particular browser). <br/><br/>
        You can also create an account to save and load data on different devices.<div className="info-divider"></div>
        <h2>Other</h2>193 countries are featured in total. If you believe a correction should be made, please reach out!
        </div>
        
        </div>
        
        )}
        <div className="register-box-wrapper">
            {(showEraseData) && (
                <div className="register-box">
                    <div className="register-close-button" onClick={() => {setShowEraseData(false)}}>—</div>
                    <div className="erase-confirm-message">Are you sure you want to log out?</div>

                    <button className="submit-button" type="submit" onClick={handleLogout}>YES</button>
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

                        {(showSignup && registrationError) && (
                            <div>
                                Error: {showRegistrationError}
                            </div>
                        )}       
                        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            )}

            {(registered && showSignup) && (
                <div className="register-box">
                    <div className="register-close-button" onClick={() => {setShowSignup(false)}}>—</div>
                    <div className="confirmed-registration">
                        <div><i className="bx bx-check"></i></div>
                        <div className="confirm-text">{loggedIn ? "Your stats are being automatically backed up at the end of each game." : "You have been successfully registered. Sign in by clicking the 'Load data' button so your data is saved to your new account."}</div>
                        <button className="submit-button" onClick={() => {setShowSignup(false)}}>OK</button>
                    </div>
                </div>    
            )}

        </div>
        </div>
    )
}