import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import "./Timer.css"

export default function Timer({ play, setPlay, setIsPressed, setStreak,
                                correctGuess }) {
    const {
      seconds,
      restart,
      addTime
    } = useTimer({ expiryTimestamp: null, onExpire: () => {setPlay(false), setIsPressed([false, false, false]), setStreak(0) } })
    useEffect(() => {
      let expiryTimestamp = null
      if (play) {
        expiryTimestamp = new Date()
        expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 1)
      }
      restart(expiryTimestamp)
    }, [play, restart])
    
    
    return <div className="timer" style={{ color: seconds <= 15 ? 'red' : 'black' }}><span>{(play && seconds != 0) ? seconds : "Go!"}</span> {
        (play && seconds > 1) ? "seconds left" : seconds == 1 ? "second left!" : ""}</div>
}
