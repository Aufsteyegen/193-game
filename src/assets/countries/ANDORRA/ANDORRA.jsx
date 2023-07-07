/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/ANDORRA.glb -o /Users/main/Desktop/3143-game/src/components/ANDORRA.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Andorra(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Andorra/Andorra.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.002']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Andorra/Andorra.glb')
