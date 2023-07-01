import * as React from "react"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import { COMPONENT_MAP } from "/src/utils/constants.js"
import { Float, Loader, Stage } from '@react-three/drei'
import R3F_LoadingScreen from "../R3F_LoadingScreen/R3F_LoadingScreen"
import "./R3F.css"

export default function R3F({ play, slot1, slot2, slot3, slot4 }) {
    return (
        <div className="canvas-container">
            <Canvas shadows >
            <color attach="background" args={['white']} />
                <R3F_LoadingScreen play={play} />
                {(play) && (
                <Stage adjustCamera environment="park" shadows>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.4} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot1]({ 
                            scale: 4,
                            position: [-8, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.2} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot2]({
                            scale: 4, 
                            position: [-4, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.3} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot3]({ 
                            scale: 4,
                            position: [0, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0} speed={5.2} range={[-0.1, 0.1]}>
                        {COMPONENT_MAP[slot4]({
                            scale: 4, 
                            position: [4, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
            </Stage>
                )}
            </Canvas>
            <Loader />
        </div>
    )
}
