/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/components/countries/Luxembourg.glb -o /Users/main/Desktop/3143-game/src/components/Luxembourg.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Luxembourg(props) {
  const { nodes, materials } = useGLTF('src/components/countries/Luxembourg/Luxembourg.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.029']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('src/components/countries/Luxembourg/Luxembourg.glb')