/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Germany.glb -o /Users/main/Desktop/3143-game/src/components/Germany.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Germany(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Germany/Germany.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve008.geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Germany/Germany.glb')
