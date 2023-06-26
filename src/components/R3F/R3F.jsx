import * as React from "react"
import { Canvas } from '@react-three/fiber'
import { useEffect, useState, Suspense } from "react"
import { shuffleArray } from "/src/utils/shuffleLogic"
import { COUNTRIES, COMPONENT_MAP } from "/src/utils/constants.js"
import { Float, Loader, Stage } from '@react-three/drei'
import R3F_LoadingScreen from "../R3F_LoadingScreen/R3F_LoadingScreen"
import "./R3F.css"

export default function R3F({ play, setPlay, slot1, slot2, slot3 }) {
    return (
        <div className="canvas-container">
            <Canvas shadows >
            <color attach="background" args={['white']} />
                <R3F_LoadingScreen play={play} />
                {(play) && (
                <Stage adjustCamera environment="park" shadows>
                    <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.3} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot3]({ 
                         scale: 4,
                         position: [4.5, 0, 0], 
                         rotation: [Math.PI / 2, Math.PI, Math.PI]})}
                    </Float>
                    </Suspense>
                    <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.4} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot1]({ 
                         scale: 4,
                         position: [-4.5, 0, 0], 
                         rotation: [Math.PI / 2, Math.PI, Math.PI]})}
                    </Float>
                    </Suspense>
                    <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.2} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot2]({
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
