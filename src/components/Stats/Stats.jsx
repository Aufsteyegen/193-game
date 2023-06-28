import React, { useEffect, useState } from 'react'
import "./Stats.css" 

export default function Stats({ streak, play }) {
    const [isStreakChanged, setIsStreakChanged] = useState(false)
    useEffect(() => {
        setIsStreakChanged(true)
        setTimeout(() => {
            setIsStreakChanged(false)
        }, 200)
    }, [streak])

return (
    <div className="stat-icons">
        <div className={`${streak >= 1 ? ' show-streak' : !play ? ' hidden' : ' hide-streak'}${isStreakChanged ? ' changed' : ''}`}>Streak: {streak}</div>
    </div>
)
}