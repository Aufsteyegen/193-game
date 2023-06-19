/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/BosniaandHerzegovina.glb -o /Users/main/Desktop/3143-game/src/components/BosniaandHerzegovina.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/BosniaandHerzegovina.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.033']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.033']} />
    </group>
  )
}

useGLTF.preload('/BosniaandHerzegovina.glb')
