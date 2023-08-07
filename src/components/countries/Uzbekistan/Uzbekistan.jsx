/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/Uzbekistan.glb -o /Users/main/Desktop/3143-game/src/components/Uzbekistan.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Uzbekistan(props) {
  const { nodes, materials } = useGLTF('Uzbekistan.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.018']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('Uzbekistan.glb')
