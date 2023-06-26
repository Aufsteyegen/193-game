import "./GameOverlay.css"
import * as React from "react"
import { useState, useEffect } from "react"

export default function GameOverlay({ play, setPlay, isPressed, correctGuess,
                                      slot1, slot2, slot3 }) {
    return (
      <div>
        <div className={`loading-background ${!play ? 'fade-in' : 'fade-out'}`}>
        <button onClick={() => setPlay(prevPlay => !prevPlay)} className={`${play ? 'hidden' : ''}`}>

          <i className="bx bx-play" title="Play button"></i>
        </button>
        <div className="loading-message">
          Click the <b>[play]</b> button or the <b>[1]</b> key to start.
        </div>
        </div>
        {play && (
            <div>
                <div className="flag-display">
                <img
                    src={
                          correctGuess == 0
                        ? `/src/assets/flags/${slot1}.png`
                        : correctGuess == 1
                        ? `/src/assets/flags/${slot2}.png`
                        : `/src/assets/flags/${slot3}.png`
                    }
                    alt={
                        correctGuess == 0
                      ? `[${slot1} flag]`
                      : correctGuess == 1
                      ? `[${slot2} flag]`
                      : `[${slot3} flag]`
                    }
                    />
                </div>
                <div className="key-message">Which country corresponds to the flag?</div>
                <div className="key-icons">
                    <div className={`key-icon${isPressed[0] ? ' pressed' : ''}${isPressed[0] ? ' down' : ' up'}`}>1</div>
                    <div className={`key-icon${isPressed[1] ? ' pressed' : ''}${isPressed[1] ? ' down' : ' up'}`}>2</div>
                    <div className={`key-icon${isPressed[2] ? ' pressed' : ''}${isPressed[2] ? ' down' : ' up'}`}>3</div>
                </div>
                <div className="slot-status-icons">
                    <div><i className={`bx bx-x ${(isPressed[0] &&  correctGuess != 0)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-x ${(isPressed[1] &&  correctGuess != 1)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-x ${(isPressed[2] &&  correctGuess != 2)? ' show' : ' hide'}`}></i></div>
                </div>
            </div>
        )}
      </div>
    )
} 
  