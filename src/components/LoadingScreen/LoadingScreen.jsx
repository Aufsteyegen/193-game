import "./LoadingScreen.css"
import * as React from "react"
import { useState, useEffect } from "react"

export default function LoadingScreen({ play, setPlay }) {
    return (
      <div className={`loading-background ${!play ? 'fade-in' : 'fade-out'}`}>
        <button onClick={() => setPlay(prevPlay => !prevPlay)} className={`${play ? 'hidden' : ''}`}>

          <i className="bx bx-play" title="Play button"></i>
        </button>
        <div className="loading-message">
          Click the <b>play</b> button or the <b>1</b> key to start.
        </div>
      </div>
    );
  }
  
  