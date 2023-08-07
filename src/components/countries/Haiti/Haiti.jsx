/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/components/countries/Haiti.glb -o /Users/main/Desktop/3143-game/src/components/Haiti.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Haiti(props) {
  const { nodes, materials } = useGLTF('src/components/countries/Haiti/Haiti.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['HT-SE'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-OU'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-ND'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-NE'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-CE'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-AR'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-SD'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-NO'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-NI'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['HT-GA'].geometry} material={materials['SVGMat.001']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('src/components/countries/Haiti/Haiti.glb')