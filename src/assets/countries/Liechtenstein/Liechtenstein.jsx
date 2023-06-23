/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Liechtenstein.glb -o /Users/main/Desktop/3143-game/src/components/Liechtenstein.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Liechtenstein/Liechtenstein.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.027']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Liechtenstein/Liechtenstein.glb')
