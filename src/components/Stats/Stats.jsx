import React, { useEffect, useState } from 'react'
import "./Stats.css" 

export default function Stats({ streak, play, increaseStreak }) {
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