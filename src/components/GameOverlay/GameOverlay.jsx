import "./GameOverlay.css"
import { useAppContext } from '../AppContext'
import * as React from "react"

function addSpaces(name) {
    if (name == "SaintKittsandNevis") return "Saint Kitts and Nevis"
    if (name == "SaoTomeandPrincipe") return "Sao Tome and Principe"
    if (name == "AntiguaandBarbuda") return "Antigua and Barbuda"
    if (name == "BosniaandHerzegovina") return "Bosnia and Herzegovina"
    if (name == "SaintVincentandtheGrenadines") return "Saint Vincent and the Grenadines"
    if (name == "TrinidadandTobago") return "Trinidad and Tobago"
    if (name == "VietNam") return "Vietnam"
    if (name == "DemocraticPeoplesRepublicofKorea") return "North Korea (DPRK)"
    if (name == "RepublicofKorea") return "South Korea (KOR)"
    if (name == "UnitedStatesofAmerica") return "United States of America"
    if (name == "TimorLeste") return "Timor Leste"
    if (name == "RepublicoftheCongo") return "Republic of the Congo"
    if (name.includes(' ')) {
      return name
    }
  
    let spacedName = ''
    let word = ''
    let previousLetter = ''
  
    for (let i = 0; i < name.length; i++) {
      const currentLetter = name[i]
  
      if (currentLetter === currentLetter.toUpperCase() && i > 0) {
        if (previousLetter !== '' && previousLetter === previousLetter.toLowerCase()) {
          spacedName += word + ' '
          word = ''
        }
      }
  
      word += currentLetter
      previousLetter = currentLetter
    }
  
    spacedName += word
    return spacedName
}

export default function GameOverlay() {
    const { play, setPlay, isPressed, correctGuess,
            slot1, slot2, slot3, slot4 } = useAppContext()
    return (
      <div className="game-overlay">
        <div className={`loading-background ${!play ? 'fade-in' : 'fade-out'}`}>
        <button onClick={() => {setPlay(!play)}} className={play ? 'hidden' : ''}>
          <i className="bx bx-play" title="Play button"></i>
        </button>
        <div className="loading-message">
          Click the <b>[play]</b> button or the <b>[1]</b> key to start.
        </div>
        </div>
        {play && (
            <div className="gameplay-overlay">
                <div className="gameplay-top">
                <div className="flag-display">
                <img
                    src={
                          correctGuess == 1
                        ? `flags/${slot1}.png`
                        : correctGuess == 2
                        ? `flags/${slot2}.png`
                        : correctGuess == 3 ? 
                        `flags/${slot3}.png` 
                        : `flags/${slot4}.png` 
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
                    <div className="flag-title">{correctGuess == 1 ? addSpaces(slot1) : correctGuess == 2 ? addSpaces(slot2) :
                      correctGuess == 3 ? addSpaces(slot3) : addSpaces(slot4)}
                    </div>
                    </div>
                </div>
                <div className="gameplay-middle">
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
                <div className="gameplay-bottom">
                    <div className="key-message">Which country corresponds to the flag?</div>
                    <div className="key-icons">
                    <div className={`key-icon${isPressed[0] &&  correctGuess != 1 ? ' pressed incorrect' : isPressed[0] &&  correctGuess == 1 ? ' pressed correct' : ' not-pressed'}${isPressed[0] ? ' down' : ' up'}`}>1</div>
                        <div className={`key-icon${isPressed[1] &&  correctGuess != 2 ? ' pressed incorrect' : isPressed[1] &&  correctGuess == 2 ? ' pressed correct' : ' not-pressed'}${isPressed[1] ? ' down' : ' up'}`}>2</div>
                        <div className={`key-icon${isPressed[2] &&  correctGuess != 3 ? ' pressed incorrect' : isPressed[2] &&  correctGuess == 3 ? ' pressed correct' : ' not-pressed'}${isPressed[2] ? ' down' : ' up'}`}>3</div>
                        <div className={`key-icon${isPressed[3] &&  correctGuess != 4 ? ' pressed incorrect' : isPressed[3] &&  correctGuess == 4 ? ' pressed correct' : ' not-pressed'}${isPressed[3] ? ' down' : ' up'}`}>4</div>
                    </div>
                </div>
            </div>
        )}
      </div>
    )
} 
  