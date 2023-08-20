import { createContext, useContext, useState } from 'react'
import React from 'react'

const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({ children }) {
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
    const [timerSeconds, setTimerSeconds] = useState(60)
    const [won, setWon] = useState(false)
    // name of country in each slot displayed to user
    const [slot1, setSlot1] = useState(null)
    const [slot2, setSlot2] = useState(null)
    const [slot3, setSlot3] = useState(null)
    const [slot4, setSlot4] = useState(null)
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
    return (
      <AppContext.Provider
        value={{
          loggedIn, setLoggedIn,
          showLogin, setShowLogin,
          showSignup, setShowSignup,
          registered, setRegistered,
          updateStatus, setUpdateStatus,
          play, setPlay,
          isPressed, setIsPressed,
          correctGuess, setCorrectGuess,
          solved, setSolved,
          increaseStreak, setIncreaseStreak,
          streak, setStreak,
          timerSeconds, setTimerSeconds,
          won, setWon,
          wins, setWins,
          totalGuesses, setTotalGuesses,
          correctGuesses, setCorrectGuesses,
          longestStreak, setLongestStreak,
          bestWinTime, setBestWinTime, slot1, setSlot1,
          slot2, setSlot2, slot3, setSlot3, slot4, setSlot4
        }}
      >
        {children}
      </AppContext.Provider>
    )
}