/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/Romania.glb -o /Users/main/Desktop/3143-game/src/components/Romania.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Romania(props) {
  const { nodes, materials } = useGLTF('Romania.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.009']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('Romania.glb')
