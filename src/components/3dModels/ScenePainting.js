/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Omar Faruq Tawsif (https://sketchfab.com/omarfaruqtawsif32)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/fiesta-tea-8bde490c80444157b4545471d067423c
title: Fiesta tea
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scenePainting.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={props.paintScale}>
      <group rotation={[-Math.PI / 2.2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>

          {/* Apple */}
          <group position={[-0.96, 1.35, -0.02]}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
          </group>

          {/* Pot Lid Top */}
          <group position={[-0.91, 1.35, 0.04]}>
            <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
          </group>

          {/* Pot Handle */}
          <group position={[-0.91, 1.35, 0.04]}>
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>

          <group position={[-0.91, 1.35, 0.04]}>
            <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
          </group>
          <group position={[-0.91, 1.35, 0.04]}>
            <mesh geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
          </group>
          <group position={[-0.91, 1.35, 0.04]}>
            <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
          </group>
          <group position={[-0.91, 1.35, 0.04]}>
            <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
          </group>

          {/* Shading Blocks */}
          {/* <group position={[0, 0.32, 0]}>
            <mesh geometry={nodes.Object_18.geometry} material={nodes.Object_18.material} />
          </group>
          <group position={[0, 0.32, 0]}>
            <mesh geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
          </group>
          <group position={[0, 0.32, 0]}>
            <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
          </group>
          <group position={[0, 0.32, 0]}>
            <mesh geometry={nodes.Object_24.geometry} material={nodes.Object_24.material} />
          </group>
          <group position={[0, 0.32, 0]}>
            <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
          </group> */}

          {/* Backdrop */}
          <group position={[-0.24, 1, 0.66]} scale={0.63}>
            <mesh geometry={nodes.Object_28.geometry} material={materials.peripheri_Base_Color} />
          </group>
          {/* Chopping Board */}
          <group position={[0, 0.32, 0]} scale={0.69}>
            <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
          </group>

          {/* Shading blocks */}
          {/* <group position={[-0.28, 1.69, 0.59]} rotation={[-2.94, -0.09, -0.29]} scale={[-0.01, 0.08, 0.01]}>
            <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
          </group>
          <group position={[-0.28, 1.69, 0.59]} rotation={[-2.94, -0.09, -0.29]} scale={[-0.01, 0.08, 0.01]}>
            <mesh geometry={nodes.Object_34.geometry} material={nodes.Object_34.material} />
          </group> */}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scenePainting.gltf')
