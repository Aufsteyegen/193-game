/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/Mozambique.glb -o /Users/main/Desktop/3143-game/src/components/Mozambique.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mozambique(props) {
  const { nodes, materials } = useGLTF('Mozambique.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.012']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.012']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.012']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.012']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('Mozambique.glb')
