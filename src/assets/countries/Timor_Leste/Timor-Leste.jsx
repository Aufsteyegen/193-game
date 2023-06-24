/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Timor-Leste.glb -o /Users/main/Desktop/3143-game/src/components/Timor-Leste.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Timor_Leste(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Timor_Leste/Timor_Leste.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.005']} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.005']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Timor_Leste/Timor_Leste.glb')