/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Mauritania.glb -o /Users/main/Desktop/3143-game/src/components/Mauritania.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mauritania(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Mauritania/Mauritania.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.004']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.004']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.004']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Mauritania/Mauritania.glb')
