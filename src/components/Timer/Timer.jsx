import React, { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { useAppContext } from '../AppContext'
import "./Timer.css"

export default function Timer() {
    const { play, setPlay, setIsPressed, setStreak, increaseStreak, setIncreaseStreak,
            timerSeconds, setTimerSeconds, won, setWon, streak, longestStreak, 
            setLongestStreak } = useAppContext()
    const [pageLoadMessage, setPageLoadMessage] = useState(false)
    const { seconds, minutes, start, pause, reset } = useStopwatch({ autoStart: false })
    useEffect(() => {
        if (play) {
            reset()
            start()
        }
        else {
            pause()
        }
    }, [play])
    
    useEffect(() => {
      let intervalId = null
      if (pageLoadMessage) setPageLoadMessage(false)
      if (play && timerSeconds > 0 && timerSeconds <= 60) {
        intervalId = setInterval(() => {
          setTimerSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000)
      } else {
        clearInterval(intervalId)
      }
      return () => {
        clearInterval(intervalId)
      }
    }, [play, timerSeconds])

    useEffect(() => {
      if (increaseStreak) {
        if (streak > longestStreak) {
            setLongestStreak(streak)
            localStorage.setItem("longestStreak", String(longestStreak))
        }
        setTimerSeconds((prevSeconds) => Math.min(prevSeconds + 5, 60))
        const delay = setTimeout(() => {
            setIncreaseStreak(false)
          }, 1000)
          return () => clearTimeout(delay)
      }
    }, [increaseStreak, setIncreaseStreak])

    useEffect(() => {
      if (timerSeconds <= 0) {
        setPlay(false)
        setIsPressed([false, false, false, false])
        setStreak(0)
        setTimerSeconds(60)
      }
    }, [timerSeconds, setPlay, setIsPressed, setStreak])

    useEffect(() => {
        setPageLoadMessage(true)
    }, [])
    return <div className="timer" style={{ color: timerSeconds <= 15 ? 'red' : 'white' }}>
            <div className="stopwatch">{`${minutes} : ${seconds.toString().padStart(2, '0')}`}</div>
           <span>{(play && timerSeconds != 0) ? timerSeconds : (!play && !pageLoadMessage) ? "Time's up!": "Ready?"}</span> {
                  (play && timerSeconds > 1) ? "seconds left" : timerSeconds == 1 ? "second left!" : ""}
            </div>
}
