/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/SanMarino.glb -o /Users/main/Desktop/3143-game/src/components/SanMarino.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/SanMarino/SanMarino.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.016']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/SanMarino/SanMarino.glb')
