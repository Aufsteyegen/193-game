/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 /Users/main/Desktop/3143-game/src/assets/countries/ALBANIA.glb -o /Users/main/Desktop/3143-game/src/components/ALBANIA.jsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Albania(props) {
    const { nodes, materials } = useGLTF('src/assets/countries/Albania/ALBANIA.glb')
    return (
      <group {...props} dispose={null}>
          <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat}material-roughness={0.10} material-metalness={0.80} material-color="grey"/>
      </group>
    )
}
  
 useGLTF.preload('src/assets/countries/Albania/ALBANIA.glb')
