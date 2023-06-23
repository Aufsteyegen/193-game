/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Luxembourg.glb -o /Users/main/Desktop/3143-game/src/components/Luxembourg.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Luxembourg/Luxembourg.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.029']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Luxembourg/Luxembourg.glb')
