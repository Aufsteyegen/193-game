/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Kuwait.glb -o /Users/main/Desktop/3143-game/src/components/Kuwait.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Kuwait.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.019']} />
    </group>
  )
}

useGLTF.preload('/Kuwait.glb')
