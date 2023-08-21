import * as React from "react"
import { useEffect } from "react"
import { useAppContext } from '../AppContext'
import Timer from "../Timer/Timer"
import Stats from "../Stats/Stats"
import GameLogic from "../GameLogic/GameLogic"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import axios from 'axios'
import "./App.css"

export default function App() {
    const { setLoggedIn, setRegistered, setUpdateStatus,
            setLongestStreak, setPlay, wins, totalGuesses,
            correctGuesses, longestStreak, play, bestWinTime,
            streak, loggedIn, showLogin } = useAppContext()
    
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
            const response = await axios.post('https://l2423ek0yd.execute-api.us-east-1.amazonaws.com/api/update', {userData})
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
            <NavBar />
            <main>
                <Stats />
                <Timer />
                <div className="home-styling"></div>
                <GameLogic />
                <Footer />
            </main> 
        </div>
    )
}
