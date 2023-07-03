import * as React from "react"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import { COMPONENT_MAP } from "/src/utils/constants.js"
import { Float, Loader, Stage, Backdrop } from '@react-three/drei'
import R3F_LoadingScreen from "../R3F_LoadingScreen/R3F_LoadingScreen"
import "./R3F.css"

export default function R3F({ play, slot1, slot2, slot3, slot4 }) {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, -1, 25], fov: 35 }}>
                <spotLight position={[0, 15, 5]} intensity={10} penumbra={1} angle={0.60} color="#0c8cbf" />
                <R3F_LoadingScreen play={play} />
                {(play) && (
                    <>
                    <Backdrop floor={2} position={[0, -7, 0]} scale={[50, 18, 2]}>
                        <meshStandardMaterial color="#353540" envMapIntensity={0.1}
                        roughness={0.95} metalness={0.95} />
                    </Backdrop>
                <Stage adjustCamera={false} environment="park" shadows>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0.1} speed={5.4} range={[0, 0]}>
                        {COMPONENT_MAP[slot1]({ 
                            scale: 4,
                            position: [-8, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0.1} speed={5.2} range={[0, 0]}>
                        {COMPONENT_MAP[slot2]({
                            scale: 4, 
                            position: [-4, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0.1} speed={5.3} range={[0, 0]}>
                        {COMPONENT_MAP[slot3]({ 
                            scale: 4,
                            position: [0.5, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
                <Suspense fallback={null}>
                    <Float rotationIntensity={0.1} speed={5.2} range={[0, 0]}>
                        {COMPONENT_MAP[slot4]({
                            scale: 4, 
                            position: [4, 0, 0], 
                            rotation: [Math.PI / 2, 0, 0]
                        })}
                    </Float>
                </Suspense>
            </Stage>
            </>
                )}
            </Canvas>
            <Loader />
        </div>
    )
}
