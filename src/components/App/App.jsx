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
            <NavBar />
            <main>
                <Timer play={play} setPlay={setPlay} 
                       setIsPressed={setIsPressed} 
                       setStreak={setStreak}
                       correctGuess={correctGuess} increaseStreak={increaseStreak}
                       setIncreaseStreak={setIncreaseStreak}/>
                <Stats streak={streak} play={play} increaseStreak={increaseStreak }/>
                <div className="home-styling"></div>
                <GameLogic play={play} setPlay={setPlay}
                           isPressed={isPressed} setIsPressed={setIsPressed}
                           correctGuess={correctGuess} setCorrectGuess={setCorrectGuess}
                           solved={solved} setSolved={setSolved}
                           streak={streak} setStreak={setStreak}
                           increaseStreak={increaseStreak} setIncreaseStreak={setIncreaseStreak} />
                <Footer play={play}/>
            </main>
            
        </div>
    )
}
