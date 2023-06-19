import * as React from "react"
import { useState, useEffect } from "react"
import R3F from "../R3F/R3F"

export default function App() {
    const [play, setPlay] = useState(false)
    return (
        <div className="app">
            <main>
                <button onClick={() => setPlay(!play)}>Testing</button>
                <R3F play={play}/>
            </main>
        </div>
    )
}
