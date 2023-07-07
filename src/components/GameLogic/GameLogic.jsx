import * as React from "react"
import { useEffect, useState } from "react"
import { shuffleArray } from "/src/utils/shuffleLogic"
import { COUNTRIES } from "/src/utils/constants.js"
import R3F from "../R3F/R3F"
import GameOverlay from "../GameOverlay/GameOverlay"

function chooseSlot() {
    var currentTime = Date.now()
    var randomNum = Math.floor((currentTime % 4000) / 1000) + 1
    return randomNum
}

export default function GameLogic({ play, setPlay, 
                                    isPressed, setIsPressed,
                                    correctGuess, setCorrectGuess, 
                                    solved, setSolved,
                                    setStreak, setIncreaseStreak,
                                    totalGuesses, setTotalGuesses,
                                    correctGuesses, setCorrectGuesses }) {

    // copy the imported array of country names
    const [countries, setCountries] = useState(COUNTRIES.slice())

    // arrays of answers for each slot (country names)
    const [slot1Answers, setSlot1Answers] = useState([])
    const [slot2Answers, setSlot2Answers] = useState([])
    const [slot3Answers, setSlot3Answers] = useState([])
    const [slot4Answers, setSlot4Answers] = useState([])

    // indices of current slotAnswer displayed
    const [slot1Idx, setSlot1Idx] = useState(0)
    const [slot2Idx, setSlot2Idx] = useState(0)
    const [slot3Idx, setSlot3Idx] = useState(0)
    const [slot4Idx, setSlot4Idx] = useState(0)

    // name of country in each slot displayed to user
    const [slot1, setSlot1] = useState(null)
    const [slot2, setSlot2] = useState(null)
    const [slot3, setSlot3] = useState(null)
    const [slot4, setSlot4] = useState(null)

    useEffect(() => {
        let newCountriesCopy = [...countries]
        shuffleArray(newCountriesCopy)
        setCountries(newCountriesCopy)
    }, [play])
      
    useEffect(() => {
        const initialSlot1Answers = countries.slice(0, 50)
        const initialSlot2Answers = countries.slice(51, 101)
        const initialSlot3Answers = countries.slice(102, 152)
        const initialSlot4Answers = countries.slice(153, 192)
      
        setSlot1Answers(initialSlot1Answers)
        setSlot2Answers(initialSlot2Answers)
        setSlot3Answers(initialSlot3Answers)
        setSlot4Answers(initialSlot4Answers)
    }, [countries])
      
    useEffect(() => {
        setSlot1(slot1Answers[0])
        setSlot2(slot2Answers[0])
        setSlot3(slot3Answers[0])
        setSlot4(slot4Answers[0])
        setCorrectGuess(chooseSlot())
    }, [slot1Answers, slot2Answers, slot3Answers, slot4Answers, setCorrectGuess])

    // handle key presses
    useEffect(() => {
        function handleKeyDown(e) {
          if (isPressed.filter(value => value === true).length === 3 || solved) {
                return
          }
          let pressed = [...isPressed]
          if (play && (e.key === '1' || e.key === '2' || e.key === '3' || e.key ==='4')) {
            let newTotalGuesses = totalGuesses + 1
            setTotalGuesses(newTotalGuesses)
          }
          if (play && (e.key === '1')) {
            pressed[0] = true
            setIsPressed(pressed)
            if (correctGuess == 1) {
                setSolved(true)
                let newCorrectGuesses = correctGuesses + 1
                setCorrectGuesses(newCorrectGuesses)
            }
          } else if (play && (e.key === '2')) {
            pressed[1] = true
            setIsPressed(pressed)
            if (correctGuess == 2) {
                setSolved(true)
                let newCorrectGuesses = correctGuesses + 1
                setCorrectGuesses(newCorrectGuesses)
            }
          } else if (play && (e.key === '3')) {
            pressed[2] = true
            setIsPressed(pressed)
            if (correctGuess == 3) {
                setSolved(true)
                let newCorrectGuesses = correctGuesses + 1
                setCorrectGuesses(newCorrectGuesses)
            }
          } else if (play && (e.key === '4')) {
            pressed[3] = true
            setIsPressed(pressed)
            if (correctGuess === 4) {
                setSolved(true)
                let newCorrectGuesses = correctGuesses + 1
                setCorrectGuesses(newCorrectGuesses)
            }
        }
        }
        document.addEventListener('keydown', handleKeyDown)
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown)
        }
    })
    // handle reset
    useEffect(() => {
        if (isPressed.filter(value => value === true).length === 3 || solved) {
          if (isPressed.filter(value => value === true).length === 1 && solved) {
            setStreak(prevStreak => prevStreak + 1)
            setIncreaseStreak(true)
          } else {
            setStreak(0)
          }
          setTimeout(() => {
            if (correctGuess === 1) {
              const newSlot1Idx = slot1Idx == 49 ? 0 : slot1Idx + 1
              setSlot1Idx(newSlot1Idx)
              setSlot1(slot1Answers[newSlot1Idx])
            } else if (correctGuess === 2) {
              const newSlot2Idx = slot2Idx == 49 ? 0 : slot2Idx + 1
              setSlot2Idx(newSlot2Idx)
              setSlot2(slot2Answers[newSlot2Idx])
            } else if (correctGuess === 3) {
              const newSlot3Idx = slot3Idx == 49 ? 0 : slot3Idx + 1
              setSlot3Idx(newSlot3Idx)
              setSlot3(slot3Answers[newSlot3Idx])
            } else if (correctGuess === 4) {
              const newSlot4Idx = slot4Idx == 38 ? 0 : slot4Idx + 1
              setSlot4Idx(newSlot4Idx)
              setSlot4(slot4Answers[newSlot4Idx])
            }
            setCorrectGuess(chooseSlot())
            setIsPressed([false, false, false, false])
            setSolved(false)
          }, 600)
        }
      }, [isPressed, solved, setCorrectGuess, setIsPressed, setSolved, setStreak,
          correctGuess, slot1Answers, slot1Idx, slot2Answers, slot2Idx, slot4Idx,
          slot3Answers, slot3Idx, slot4Answers, setIncreaseStreak])
    return (
        <>
            <GameOverlay play={play} setPlay={setPlay} 
                                isPressed={isPressed} setIsPressed={setIsPressed} 
                                correctGuess={correctGuess}
                                slot1={slot1} slot2={slot2}
                                slot3={slot3} slot4={slot4} />
            <R3F play={play} setPlay={setPlay} slot1={slot1} slot2={slot2}
                                               slot3={slot3} slot4={slot4}
                                               isPressed={isPressed}
                                               correctGuess={correctGuess} />
        </>
    )
}
