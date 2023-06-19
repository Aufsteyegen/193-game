/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Cameroon.glb -o /Users/main/Desktop/3143-game/src/components/Cameroon.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Cameroon.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.042']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.042']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.042']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.042']} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.042']} />
      <mesh geometry={nodes.Curve005.geometry} material={materials['SVGMat.042']} />
    </group>
  )
}

useGLTF.preload('/Cameroon.glb')
