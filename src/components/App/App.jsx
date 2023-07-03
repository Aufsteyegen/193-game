import * as React from "react"
import { useState, useEffect } from "react"
import Timer from "../Timer/Timer"
import Stats from "../Stats/Stats"
import GameLogic from "../GameLogic/GameLogic"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./App.css"

export default function App() {
    const [play, setPlay] = useState(false)
    const [isPressed, setIsPressed] = useState([false, false, false, false])

    const [correctGuess, setCorrectGuess] = useState(null)
    const [solved, setSolved] = useState(false)

    const [increaseStreak, setIncreaseStreak] = useState(false)
    const [streak, setStreak] = useState(0)

    const [wins, setWins] = useState(0)
    const [totalGuesses, setTotalGuesses] = useState(0)
    const [correctGuesses, setCorrectGuesses] = useState(0)

    const [latestWinTime, setLatestWinTime] = useState(0)
    const [bestWinTime, setBestWinTime] = useState(0)

    const [timerSeconds, setTimerSeconds] = useState(60)

    const [won, setWon] = useState(false)

    useEffect(() => {
        localStorage.setItem("wins", String(wins))
        localStorage.setItem("totalGuesses", String(totalGuesses))
        localStorage.setItem("correctGuesses", String(correctGuesses))
        localStorage.setItem("bestWinTime", String(bestWinTime))
    }, [play])

    useEffect(() => {
        const storedWins = localStorage.getItem('wins')
        const storedTotalGuesses = localStorage.getItem('totalGuesses')
        const storedCorrectGuesses = localStorage.getItem('correctGuesses')
        const storedBestWinTime = localStorage.getItem('bestWinTime')
      
        setWins(Number(storedWins))
        setTotalGuesses(Number(storedTotalGuesses))
        setCorrectGuesses(Number(storedCorrectGuesses))
        setBestWinTime(Number(storedBestWinTime))
      }, [play])
            

    useEffect(() => {
        function handleKeyDown(e) {
          if (!play && e.keyCode === 49) {
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
                    bestWinTime={bestWinTime} latestWinTime={latestWinTime} 
                    setLatestWinTime={setLatestWinTime} setPlay={setPlay} play={play}
                    setTimerSeconds={setTimerSeconds}  />
            <main>
                <Timer play={play} setPlay={setPlay} 
                       setIsPressed={setIsPressed} 
                       setStreak={setStreak}
                       correctGuess={correctGuess} increaseStreak={increaseStreak}
                       setIncreaseStreak={setIncreaseStreak}
                       latestWinTime={latestWinTime} setLatestWinTime={setLatestWinTime}
                       timerSeconds={timerSeconds} setTimerSeconds={setTimerSeconds}
                       won={won} setWon={setWon} />
                <Stats streak={streak} play={play} increaseStreak={increaseStreak }/>
                <div className="home-styling"></div>
                <GameLogic play={play} setPlay={setPlay}
                           isPressed={isPressed} setIsPressed={setIsPressed}
                           correctGuess={correctGuess} setCorrectGuess={setCorrectGuess}
                           solved={solved} setSolved={setSolved}
                           streak={streak} setStreak={setStreak}
                           increaseStreak={increaseStreak} setIncreaseStreak={setIncreaseStreak}
                           totalGuesses={totalGuesses} setTotalGuesses={setTotalGuesses}
                           correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses} />
                <Footer play={play}/>
            </main>
            
        </div>
    )
}
