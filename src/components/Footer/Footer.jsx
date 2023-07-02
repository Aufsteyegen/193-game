import * as React from "react"
import "./Footer.css"

export default function Footer ({ play }) {
    return (
        <>
            <div className={`footer ${!play ? 'fade-in' : 'fade-out'}`}></div>
        </>
    )
}