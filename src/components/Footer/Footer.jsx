import * as React from "react"
import "./Footer.css"
import { useAppContext } from '../AppContext'

export default function Footer () {
    const { play } = useAppContext()
    return (
        <>
            <div className={`footer ${!play ? 'fade-in' : 'fade-out'}`}>
                <div>Made by Aufsteyegen</div>
            </div>
        </>
    )
}