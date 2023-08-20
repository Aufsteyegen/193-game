import React, { useEffect, useState } from 'react'
import { useAppContext } from '../AppContext'
import "./Stats.css" 

export default function Stats() {
    const { streak, play, increaseStreak } = useAppContext()
    const [isStreakChanged, setIsStreakChanged] = useState(false)
    useEffect(() => {
        setIsStreakChanged(true)
        setTimeout(() => {
            setIsStreakChanged(false)
        }, 200)
    }, [streak])

return (
    <div className="stat-icons">
        {increaseStreak && <span className="timer-increase">+5 </span>}
        <div className={`${streak >= 1 ? ' show-streak' : !play ? ' hidden' : ' hide-streak'}${isStreakChanged ? ' changed' : ''}`}>Streak: {streak}</div>
    </div>
)
}