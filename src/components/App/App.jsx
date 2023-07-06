import * as React from "react"
import { useState, useEffect } from "react"
import Timer from "../Timer/Timer"
import Stats from "../Stats/Stats"
import GameLogic from "../GameLogic/GameLogic"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import axios from 'axios'
import "./App.css"

export default function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [registered, setRegistered] = useState(false)

    const [updateStatus, setUpdateStatus] = useState("")

    const [play, setPlay] = useState(false)
    const [isPressed, setIsPressed] = useState([false, false, false, false])

    const [correctGuess, setCorrectGuess] = useState(null)
    const [solved, setSolved] = useState(false)

    const [increaseStreak, setIncreaseStreak] = useState(false)
    const [streak, setStreak] = useState(0)

    const [wins, setWins] = useState(() => {
        return Number(localStorage.getItem("wins") || 0)
    })
    const [totalGuesses, setTotalGuesses] = useState(() => {
        return Number(localStorage.getItem("totalGuesses") || 0)
    })
    const [correctGuesses, setCorrectGuesses] = useState(() => {
        return Number(localStorage.getItem("correctGuesses") || 0)
    })

    const [longestStreak, setLongestStreak] = useState(() => {
        return (localStorage.getItem("longestStreak") || 0)
    })
    const [bestWinTime, setBestWinTime] = useState(() => {
        return (localStorage.getItem("bestWinTime") || 0)
    })

    const [timerSeconds, setTimerSeconds] = useState(60)

    const [won, setWon] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token !== null && token !== undefined) setLoggedIn(true), setRegistered(true)
    }, [])

    useEffect(() => {
        localStorage.setItem("wins", String(wins))
        localStorage.setItem("totalGuesses", String(totalGuesses))
        localStorage.setItem("correctGuesses", String(correctGuesses))
        localStorage.setItem("bestWinTime", String(bestWinTime))
        if (streak > longestStreak) {
            setLongestStreak(streak)
            localStorage.setItem("longestStreak", String(longestStreak))
        }
        const updateRow = async () => {
            const email = localStorage.getItem('email')
            const userData = {
                email: email,
                wins: wins,
                totalGuesses: totalGuesses,
                correctGuesses: correctGuesses,
                longestStreak: longestStreak,
            }
        try {
            setUpdateStatus("")
            
            const response = await axios.post('http://localhost:3000/update', {userData})
            setUpdateStatus(response.status)
          } catch (error) {
            console.error('Error updating row:', error)
            setUpdateStatus(error)
        }}
        if (!play && loggedIn) updateRow()
    }, [play])
            
    useEffect(() => {
        function handleKeyDown(e) {
          if (!play && e.keyCode === 49 && !showLogin && !showSignup) {
            setPlay(true)
        }}
        document.addEventListener('keydown', handleKeyDown)
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })
    return (
        <div className="app">
            <NavBar wins={wins} totalGuesses={totalGuesses} correctGuesses={correctGuesses} 
                    bestWinTime={bestWinTime} longestStreak={longestStreak} 
                    setLongestStreak={setLongestStreak} setPlay={setPlay} play={play}
                    setTimerSeconds={setTimerSeconds}
                    showSignup={showSignup} setShowSignup={setShowSignup}
                    showLogin={showLogin} setShowLogin={setShowLogin}
                    loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                    registered={registered} setRegistered={setRegistered}
                    updateStatus={updateStatus}  />
            <main>
                <Timer play={play} setPlay={setPlay} 
                       setIsPressed={setIsPressed} 
                       setStreak={setStreak}
                       correctGuess={correctGuess} increaseStreak={increaseStreak}
                       setIncreaseStreak={setIncreaseStreak}
                       timerSeconds={timerSeconds} setTimerSeconds={setTimerSeconds}
                       won={won} setWon={setWon} streak={streak}
                       longestStreak={longestStreak} setLongestStreak={setLongestStreak} />
                <Stats streak={streak} play={play} increaseStreak={increaseStreak }/>
                <div className="home-styling"></div>
                <GameLogic play={play} setPlay={setPlay}
                           isPressed={isPressed} setIsPressed={setIsPressed}
                           correctGuess={correctGuess} setCorrectGuess={setCorrectGuess}
                           solved={solved} setSolved={setSolved}
                           streak={streak} setStreak={setStreak}
                           increaseStreak={increaseStreak} setIncreaseStreak={setIncreaseStreak}
                           totalGuesses={totalGuesses} setTotalGuesses={setTotalGuesses}
                           correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses}
                           showSignup={showSignup} showLogin={showLogin}
                           />
                <Footer play={play}/>
            </main> 
        </div>
    )
}
