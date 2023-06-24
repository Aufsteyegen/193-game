/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Nicaragua.glb -o /Users/main/Desktop/3143-game/src/components/Nicaragua.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Nicaragua(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Nicaragua/Nicaragua.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.019']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.019']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Nicaragua/Nicaragua.glb')
