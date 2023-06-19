/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Kiribati.glb -o /Users/main/Desktop/3143-game/src/components/Kiribati.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Kiribati.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.017']} />
    </group>
  )
}

useGLTF.preload('/Kiribati.glb')
