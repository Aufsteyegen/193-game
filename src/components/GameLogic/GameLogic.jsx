import * as React from "react"
import { useEffect, useState } from "react"
import { shuffleArray } from "/src/utils/shuffleLogic"
import { COUNTRIES, COMPONENT_MAP } from "/src/utils/constants.js"
import R3F from "../R3F/R3F"

function chooseSlot () {
    var randomNum = Math.floor(Math.random() * (2 + 1))
    return randomNum
}

function chooseIndex() {
    return Math.floor(Math.random() * (190 - 0 + 1))
  }

export default function GameLogic({ play, setPlay, isPressed, setIsPressed,
                                    correctGuess, setCorrectGuess,
                                    slot1, setSlot1, slot2, setSlot2,
                                    slot3, setSlot3 }) {
    const [countries, setCountries] = useState(COUNTRIES.slice())
    // shuffle countries on page load
    useEffect(() => {
        shuffleArray(countries)
        setCorrectGuess(chooseSlot())
        setSlot1(countries[0])
        setSlot2(countries[1])
        setSlot3(countries[2])
    }, [play, countries])
    useEffect(() => {
        function handleKeyDown(e) {
            if (play && (e.keyCode === 49 || e.keyCode === 65)) {
                const newState = [...isPressed]
                newState[0] = true
                setIsPressed(newState)
                if (correctGuess == 0) {
                    setSlot1(countries[chooseIndex()])
                    setCorrectGuess(chooseSlot())
                    let resetState = [...isPressed]
                    resetState = [false, false, false]
                    setIsPressed(resetState)
                }
            }
            else if (play && (e.keyCode === 50 || e.keyCode === 83)) {
                const newState = [...isPressed]
                newState[1] = true
                setIsPressed(newState)
                if (correctGuess == 1) {
                    setSlot2(countries[chooseIndex()])
                    setCorrectGuess(chooseSlot())
                    let resetState = [...isPressed]
                    resetState = [false, false, false]
                    setIsPressed(resetState)
                }
            }
            else if (play && (e.keyCode === 51 || e.keyCode === 68)) {
                const newState = [...isPressed]
                newState[2] = true
                setIsPressed(newState)
                if (correctGuess != 0 && correctGuess != 1) {
                    setSlot3(countries[chooseIndex()])
                    setCorrectGuess(chooseSlot())
                    let resetState = [...isPressed]
                    resetState = [false, false, false]
                    setIsPressed(resetState)
                }
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })
    return (
        <R3F play={play} setPlay={setPlay} slot1={slot1} slot2={slot2} slot3={slot3} />
    )
}
