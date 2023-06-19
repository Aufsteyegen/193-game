import * as React from "react"
import { Canvas } from '@react-three/fiber'
import { useEffect } from "react"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Model } from "/src/assets/countries/ALBANIA/ALBANIA.jsx"


export default function R3F(props) {
    return (
        <div className="canvas-container">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <Model />
            </Canvas>
        </div>
    )
}