import * as React from "react"
import axios from "axios"
import { useState } from 'react'
import "./Navbar.css"

export default function Navbar({ wins, totalGuesses, correctGuesses, bestWinTime,
                                 latestWinTime, setLatestWinTime, setPlay, play,
                                 setTimerSeconds }) {
    const [showSignup, setShowSignup] = useState(false)
    const [incorrectConfirmation, setIncorrectConfirmation] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function handleSubmit() {
        if (password === setPassword && password.length >= 10 && email.length >= 3 ) setIncorrectConfirmation(false)
        if (!incorrectConfirmation) {
            try {
                const userData = {
                    email: email,
                    password: password,
                    wins: wins,
                    totalGuesses: totalGuesses,
                    correctGuesses: correctGuesses,
                    bestWinTime: bestWinTime
                }
                const response = await axios.post('/register', { userData })
                
                console.log('User registered successfully:', response.data)
                setShowSignup(false)
                return response.data
              } catch (error) {
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
                <div>Latest win time: {latestWinTime}</div>
                <div>Best win time: {bestWinTime}</div>
                <div>Accuracy: {totalGuesses > 0 ? ((correctGuesses / totalGuesses) * 100).toFixed(2) : 100}%</div>
            </div>
            {play && <div className="stop-button"><i class='bx bxs-square' onClick={() => {setPlay(false), setTimerSeconds(60)}}></i></div>}
            <div className="user-data">
                <button onClick={() => {setShowSignup(!showSignup)}}>Save data</button>
            </div>
        </div>
        <div className="register-box-wrapper">
        {showSignup && (
                <div className="register-box">
                    <div className="register-close-button" onClick={() => {setShowSignup(false)}}>—</div>
                    <form>
                        <label htmlFor="email">Email*</label>
                        <input name="email" className={`${email.length < 3 || email[0] === "@" ? "incorrect-confirmation" : ""}`} type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} required />
                        {(email.length < 3 || email[0] === "@") && <div className="password-requirement">Enter a valid email address</div>}
                        
                        <label htmlFor="password">Password*</label>
                        <input className={`${password.length < 10 ? "incorrect-confirmation" : ""}`} name="password" type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} required />
                        {password.length < 10 && <div className="password-requirement">Password must be at least 10 characters</div>}
                        
                        <label htmlFor="confirm-password">Confirm password*</label>
                        <input className={`${password !== confirmPassword || confirmPassword.length == 0 ? "incorrect-confirmation" : ""}`} name="confirm-password" type="password" value={confirmPassword} onChange={(event) => {setConfirmPassword(event.target.value)}} required />
                        {password !== confirmPassword && <div className="password-requirement">Password confirmation does not match</div>}

                        <button className="submit-button" type="button" onClick={handleSubmit}>Submit</button>
                        
                    </form>
                </div>
            )}
        </div>
        </div>
    )
}