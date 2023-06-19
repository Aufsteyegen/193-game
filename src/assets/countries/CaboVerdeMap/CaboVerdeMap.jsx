/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/CaboVerdeMap.glb -o /Users/main/Desktop/3143-game/src/components/CaboVerdeMap.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/CaboVerdeMap.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve005.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve006.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve007.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve008.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve009.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve010.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve011.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve012.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve013.geometry} material={materials['SVGMat.040']} />
      <mesh geometry={nodes.Curve014.geometry} material={materials['SVGMat.040']} />
    </group>
  )
}

useGLTF.preload('/CaboVerdeMap.glb')
