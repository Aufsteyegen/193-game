import "./GameOverlay.css"
import * as React from "react"

export default function GameOverlay({ play, setPlay, isPressed, correctGuess,
                                      slot1, slot2, slot3, slot4 }) {
    
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
                          correctGuess == 1
                        ? `/src/assets/flags/${slot1}.png`
                        : correctGuess == 2
                        ? `/src/assets/flags/${slot2}.png`
                        : correctGuess == 3 ? 
                        `/src/assets/flags/${slot3}.png` 
                        : `/src/assets/flags/${slot4}.png` 
                    }
                    alt={
                        correctGuess == 1
                      ? `[${slot1} flag]`
                      : correctGuess == 2
                      ? `[${slot2} flag]`
                      : correctGuess == 3
                      ? `[${slot3} flag]`
                      : `[${slot4} flag]`
                    }
                    />
                </div>
                <div className="key-message">Which country corresponds to the flag?</div>
                <div className="key-icons">
                    <div className={`key-icon${isPressed[0] ? ' pressed' : ''}${isPressed[0] ? ' down' : ' up'}`}>1</div>
                    <div className={`key-icon${isPressed[1] ? ' pressed' : ''}${isPressed[1] ? ' down' : ' up'}`}>2</div>
                    <div className={`key-icon${isPressed[2] ? ' pressed' : ''}${isPressed[2] ? ' down' : ' up'}`}>3</div>
                    <div className={`key-icon${isPressed[3] ? ' pressed' : ''}${isPressed[3] ? ' down' : ' up'}`}>4</div>
                </div>
                <div className="slot-status-icons">
                    <div><i className={`bx bx-x ${(isPressed[0] &&  correctGuess != 1)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-x ${(isPressed[1] &&  correctGuess != 2)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-x ${(isPressed[2] &&  correctGuess != 3)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-x ${(isPressed[3] &&  correctGuess != 4)? ' show' : ' hide'}`}></i></div>
                </div>
                <div className="slot-status-icons-2">
                    <div><i className={`bx bx-check ${(isPressed[0] &&  correctGuess == 1)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-check ${(isPressed[1] &&  correctGuess == 2)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-check ${(isPressed[2] &&  correctGuess == 3)? ' show' : ' hide'}`}></i></div>
                    <div><i className={`bx bx-check ${(isPressed[3] &&  correctGuess == 4)? ' show' : ' hide'}`}></i></div>
                </div>
            </div>
        )}
      </div>
    )
} 
  