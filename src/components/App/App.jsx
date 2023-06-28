import * as React from "react"
import { useState, useEffect } from "react"
import Timer from "../Timer/Timer"
import Stats from "../Stats/Stats"
import GameLogic from "../GameLogic/GameLogic"
import GameOverlay from "../GameOverlay/GameOverlay"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./App.css"

export default function App() {
    const [play, setPlay] = useState(false)
    const [isPressed, setIsPressed] = useState([false, false, false])
    const [correctGuess, setCorrectGuess] = useState(null)
    const [slot1, setSlot1] = useState(null)
    const [slot2, setSlot2] = useState(null)
    const [slot3, setSlot3] = useState(null)
    const [solved, setSolved] = useState(false)
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
                <Timer play={play} setPlay={setPlay} setIsPressed={setIsPressed} setStreak={setStreak}
                       correctGuess={correctGuess} />
                <Stats streak={streak} play={play} />
                <div className="home-styling"></div>
                <GameOverlay play={play} setPlay={setPlay} isPressed={isPressed}
                               setIsPressed={setIsPressed} correctGuess={correctGuess}
                               slot1={slot1} slot2={slot2} slot3={slot3} />
                <GameLogic play={play} setPlay={setPlay}
                           isPressed={isPressed} setIsPressed={setIsPressed}
                           correctGuess={correctGuess} setCorrectGuess={setCorrectGuess}
                           slot1={slot1} setSlot1={setSlot1} slot2={slot2} setSlot2={setSlot2}
                           slot3={slot3} setSlot3={setSlot3}
                           solved={solved} setSolved={setSolved}
                           streak={streak} setStreak={setStreak} />
            </main>
            <Footer />
        </div>
    )
}
