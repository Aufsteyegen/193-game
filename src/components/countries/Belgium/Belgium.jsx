/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/Belgium.glb -o /Users/main/Desktop/3143-game/src/components/Belgium.jsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Belgium(props) {
  const { nodes, materials } = useGLTF('Belgium.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['BE-VAN'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-WBR'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-BRU'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-WHT'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-WLG'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-VLI'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-WLX'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-WNA'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-VOV'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-VBR'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
      <mesh geometry={nodes['BE-VWV'].geometry} material={materials['SVGMat.028']} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  )
}

useGLTF.preload('Belgium.glb')
