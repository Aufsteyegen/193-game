import React, { useEffect, useState } from 'react'
import "./Timer.css"

export default function Timer({ play, setPlay, setIsPressed, setStreak, 
                                increaseStreak, setIncreaseStreak }) {
    const [seconds, setSeconds] = useState(60)
  
    useEffect(() => {
      let intervalId = null
  
      if (play && seconds > 0 && seconds <= 60) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000)
      } else {
        clearInterval(intervalId)
      }
      return () => {
        clearInterval(intervalId)
      }
    }, [play, seconds])

    useEffect(() => {
      if (increaseStreak) {
        setSeconds((prevSeconds) => Math.min(prevSeconds + 5, 60))
        const delay = setTimeout(() => {
            setIncreaseStreak(false)
          }, 1000)
          return () => clearTimeout(delay)
      }
    }, [increaseStreak, setIncreaseStreak])

    useEffect(() => {
      if (seconds <= 0) {
        setPlay(false)
        setIsPressed([false, false, false, false])
        setStreak(0)
        setSeconds(60)
      }
    }, [seconds, setPlay, setIsPressed, setStreak])
    return <div className="timer" style={{ color: seconds <= 15 ? 'red' : 'black' }}>
           <span>{(play && seconds != 0) ? seconds : "Time's up!"}</span> {
                  (play && seconds > 1) ? "seconds left" : seconds == 1 ? "second left!" : ""}
            </div>
}
