import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import "./Timer.css"

export default function Timer({ play, setPlay }) {
    const {
      seconds,
      restart,
    } = useTimer({ expiryTimestamp: null, onExpire: () => setPlay(false) })
    useEffect(() => {
      let expiryTimestamp = null
      if (play) {
        expiryTimestamp = new Date()
        expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 1)
      }
      restart(expiryTimestamp)
    }, [play, restart])
    return <div className="timer" style={{ color: seconds <= 15 ? 'red' : 'black' }}><span>{play ? seconds : "—"}</span> {play ? "seconds left" : ""}</div>
}
