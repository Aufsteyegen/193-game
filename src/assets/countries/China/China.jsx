/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/China.glb -o /Users/main/Desktop/3143-game/src/components/China.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function China(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/China/China.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve005.geometry} material={materials['SVGMat.047']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('src/assets/countries/China/China.glb')
