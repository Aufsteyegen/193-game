import React, { useEffect, useState } from 'react'
import { Text3D, Float, Center, Environment } from '@react-three/drei'

export default function R3F_LoadingScreen ({ play }) {
    return (
        <>
        {!play && (
            <>
            <Center>
            <Environment preset="dawn" />
            <Float rotationIntensity={2}>
            <Text3D letterSpacing={-0.1} size={5} position={[-5, 0, 0]} font="../Rajdhani_Bold.json">
                1
                <meshStandardMaterial 
                    roughness={0.10}
                    metalness={0.25}
                    color="white"/>
            </Text3D>
            </Float>
            <Float rotationIntensity={2}>
            <Text3D letterSpacing={-0.1} size={5} position={[0, 0, 0]} font="../Rajdhani_Bold.json">
                9
                <meshStandardMaterial 
                    roughness={0.10}
                    metalness={0.25}
                    color="white"/>
            </Text3D>
            </Float>
            <Float rotationIntensity={2}>
            <Text3D letterSpacing={-0.1} size={5} position={[5, 0, 0]} font="../Rajdhani_Bold.json">
                3
                <meshStandardMaterial 
                    roughness={0.10}
                    metalness={0.25}
                    color="white"/>
            </Text3D>
            </Float>
            </Center>
            </>
        )}
        </>
    )
}