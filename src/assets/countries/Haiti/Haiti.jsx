/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Haiti.glb -o /Users/main/Desktop/3143-game/src/components/Haiti.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Haiti.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['HT-SE'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-OU'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-ND'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-NE'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-CE'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-AR'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-SD'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-NO'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-NI'].geometry} material={materials['SVGMat.001']} />
      <mesh geometry={nodes['HT-GA'].geometry} material={materials['SVGMat.001']} />
    </group>
  )
}

useGLTF.preload('/Haiti.glb')
