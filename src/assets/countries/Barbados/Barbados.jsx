/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/Barbados.glb -o /Users/main/Desktop/3143-game/src/components/Barbados.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Barbados(props) {
  const { nodes, materials } = useGLTF('src/assets/countries/Barbados/Barbados.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.008']} />
    </group>
  )
}

useGLTF.preload('src/assets/countries/Barbados/Barbados.glb')
