/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Georgia.glb -o /Users/main/Desktop/3143-game/src/components/Georgia.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Georgia(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Georgia/Georgia.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.027']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Georgia/Georgia.glb')
