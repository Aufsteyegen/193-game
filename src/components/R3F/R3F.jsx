import * as React from "react"
import { Canvas } from '@react-three/fiber'
import { useEffect, useState, Suspense } from "react"
import { shuffleArray, createGame } from "/src/utils/gameLogic"
import { COUNTRIES } from "/src/utils/constants.js"
import { Model } from "/src/assets/countries/ALBANIA/ALBANIA.jsx"
import { OrbitControls, Center, Resize, Environment, Html } from '@react-three/drei'
import "./R3F.css"


export default function R3F({ play, setPlay }) {
    const [gameStages, setGameStages] = useState([])
    const [gameStageIndex, setGameStageIndex] = useState(0)
    const [score, setScore] = useState(0)
    useEffect(() => {
        if (play) {
            let shuffledCountries = COUNTRIES.slice()
            shuffleArray(shuffledCountries)
            setGameStages(createGame(shuffledCountries))
            setGameStageIndex(0)
        }
    }, [play])

    return (
      <div className="canvas-container">
        <Suspense fallback={null}>
          <Canvas shadows>
            <Environment preset="park" />
            <OrbitControls />
              <Center>
                <Resize scale={4}>
                    <Html position={[-0.7, 0, 0]}><i className='bx bx-check'></i><i className='bx bx-x' ></i></Html>
                  <Model position={[-0.7, 0, 0]} />  
                </Resize>
                <Resize scale={4}>
                    <Html><i className='bx bx-check'></i><i className='bx bx-x' ></i></Html>
                  <Model position={[0, 0, 0]} />
                </Resize>
                <Resize scale={4}>
                <Html position={[0.7, 0, 0]}><i className='bx bx-check'></i><i className='bx bx-x' ></i></Html>
                  <Model position={[0.7, 0, 0]} />
                </Resize>
              </Center>
          </Canvas>
        </Suspense>
      </div>
    );
  }
