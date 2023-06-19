/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/IvoryCoast.glb -o /Users/main/Desktop/3143-game/src/components/IvoryCoast.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/IvoryCoast.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.011']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.011']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.011']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.011']} />
    </group>
  )
}

useGLTF.preload('/IvoryCoast.glb')
