import * as React from "react"
import { Canvas } from '@react-three/fiber'
import { useEffect, useState, Suspense } from "react"
import { shuffleArray } from "/src/utils/gameLogic"
import { COUNTRIES, COMPONENT_MAP } from "/src/utils/constants.js"
import { Center, Resize, Html, Float, Loader, Stage } from '@react-three/drei'
import "./R3F.css"

export default function R3F({ play, setPlay }) {
    const [gameStages, setGameStages] = useState([])
    const [score, setScore] = useState(0)
    const [slot, setSlot] = useState(["Albania", "Albania", "Albania"])
    // indices of countries currently visible to user
    const [window, setWindow] = useState([0, 1, 2])
    useEffect(() => {
        if (play) {
            let countries = COUNTRIES.slice()
            setGameStages(shuffleArray(countries))
        }
    }, [play])
    useEffect(() => {
        function handleKeyDown(e) {
          if (!play && e.keyCode === 49) {
            setPlay(true)
          }
          else if (play && (e.keyCode === 49 || e.keyCode === 65)) {
            setPlay(true)
          }
          else if (play && (e.keyCode === 50 || e.keyCode === 83)) {
            setPlay(true)
          }
          else if (play && (e.keyCode === 51 || e.keyCode === 68)) {
            setPlay(true)
          }
        }
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      })
    return (
        <div className="canvas-container">
            <Canvas shadows >
                {play && (
                <Stage adjustCamera environment="park" shadows>
                    <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.3} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot[0]]({ 
                         scale: 4,
                         position: [3, 0, 0], 
                         rotation: [Math.PI / 2, Math.PI, Math.PI]})}
                    </Float>
                    </Suspense>
                    <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.4} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot[0]]({ 
                         scale: 4,
                         position: [-3, 0, 0], 
                         rotation: [Math.PI / 2, Math.PI, Math.PI]})}
                    </Float>
                    </Suspense>
                    <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.2} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot[0]]({
                         scale: 4, 
                         position: [0, 0, 0], 
                         rotation: [Math.PI / 2, Math.PI, Math.PI]})}
                    </Float>
                    </Suspense>
                </Stage>
                )}
            </Canvas>
            <Loader />
        </div>
    )
}
