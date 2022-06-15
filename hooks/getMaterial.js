import * as THREE from 'three'

export function getPhysicalMaterial(color, roughness, transmission, thickness) {
    return new THREE.MeshPhysicalMaterial({
        color: color ? color : 'Red',
        roughness: roughness ? roughness : 1,
        transmission: transmission ? transmission : null,
        thickness: thickness ? transmission : null,
    })
}

export function getPhongMaterial(color, flatShading) {
    return new THREE.MeshPhongMaterial({
        color: color ? color : 'Red',
        flatShading: flatShading ? flatShading : 'null',
    })
}

export function getToonMaterial(color) {
    return new THREE.MeshToonMaterial({
        color: color ? color : 'Red',
    })
}
