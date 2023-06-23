import * as React from "react"
import { useState, useEffect } from "react"
import Timer from "../Timer/Timer"
import R3F from "../R3F/R3F"
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./App.css"

export default function App() {
    const [play, setPlay] = useState(false)
    return (
        <div className="app">
            <NavBar />
            <main>
                <Timer play={play} setPlay={setPlay} />
                <div className="home-styling"></div>
                <LoadingScreen play={play} setPlay={setPlay} />
                <R3F play={play} setPlay={setPlay} />
            </main>
            <Footer />
        </div>
    )
}
