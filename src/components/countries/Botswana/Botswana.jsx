/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/Botswana.glb -o /Users/main/Desktop/3143-game/src/components/Botswana.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Botswana(props) {
  const { nodes, materials } = useGLTF('Botswana.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.034']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('Botswana.glb')
