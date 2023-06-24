/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Nigeria.glb -o /Users/main/Desktop/3143-game/src/components/Nigeria.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Nigeria(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Nigeria/Nigeria.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.020']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.020']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.020']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Nigeria/Nigeria.glb')
