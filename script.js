import * as THREE from './libs/three/three.module.js';
import { OrbitControls } from './libs/three/controls/OrbitControls.js';
import Stats from './libs/three/libs/stats.module.js';
import { GUI } from './libs/three/libs/lil-gui.module.min.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild (renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// const geometry = new THREE.BoxGeometry()
const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
})
const cilindro1 = new THREE.Mesh(geometry, material)
scene.add(cilindro1)

const geometry2 = new THREE.CylinderGeometry(5, 5, 20, 32);
const material2 = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    wireframe: true
})
const cilindro2 = new THREE.Mesh(geometry2, material2)
scene.add(cilindro2)

window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / Window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)

const stats =Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()
const cubeFolder = gui.addFolder('cilindro1')
cubeFolder.add(cilindro1.scale, 'x',-5,5)
cubeFolder.add(cilindro1.scale, 'y',-5,5)
cubeFolder.add(cilindro1.scale, 'z',-5,5)
cubeFolder.open()
const cameraFolder= gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z',0,20)
cameraFolder.open()

function animate(){
    requestAnimationFrame(animate)
    cilindro1.rotation.x += 0.01
    cilindro1.rotation.y += 0.01
    cilindro2.rotation.x += 0.02
    cilindro2.rotation.y += 0.02
    controls.update()
    render()
    stats.update()
}

function render(){
    renderer.render(scene,camera)
}

animate()
