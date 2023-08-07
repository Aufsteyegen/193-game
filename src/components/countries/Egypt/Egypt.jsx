/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/Egypt.glb -o /Users/main/Desktop/3143-game/src/components/Egypt.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Egypt(props) {
  const { nodes, materials } = useGLTF('Egypt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.015']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.015']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.015']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.015']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.015']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('Egypt.glb')
