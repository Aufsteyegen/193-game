/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/BurkinaFaso.glb -o /Users/main/Desktop/3143-game/src/components/BurkinaFaso.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BurkinaFaso(props) {
  const { nodes, materials } = useGLTF('BurkinaFaso.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.038']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('BurkinaFaso.glb')
