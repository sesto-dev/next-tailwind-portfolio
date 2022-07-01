import * as THREE from 'three'

export function getPhysicalMaterial(color, roughness, transmission, thickness) {
    return new THREE.MeshPhysicalMaterial({
        color: color ? color : 'Yellow',
        roughness: roughness ? roughness : 1,
        transmission: transmission ? transmission : null,
        thickness: thickness ? thickness : null,
    })
}

export function getPhongMaterial(color, opacity, transparent, flatShading) {
    return new THREE.MeshPhongMaterial({
        color: color ? color : 'Green',
        opacity: opacity ? opacity : 0.5,
        transparent: transparent ? transparent : true,
        flatShading: flatShading ? flatShading : false,
    })
}

export function getToonMaterial(color) {
    return new THREE.MeshToonMaterial({
        color: color ? color : 'Red',
    })
}

export function getPointsMaterial(size) {
    return new THREE.PointsMaterial({
        size,
    })
}
