
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RepublicoftheCongo(props) {
  const { nodes, materials } = useGLTF("src/assets/countries/RepublicoftheCongo/RepublicoftheCongo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.007"]} material-roughness={0.10} material-metalness={0.80} material-color="grey" />
    </group>
  );
}

useGLTF.preload("src/assets/countries/RepublicoftheCongo/RepublicoftheCongo.glb");