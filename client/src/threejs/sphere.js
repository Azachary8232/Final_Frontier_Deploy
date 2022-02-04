import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import earthTexture from '../img/solar_system/earth3JS.jpg'
import earthBumpTexture from '../img/solar_system/earthBump3JS.jpg'
import clouds from '../img/solar_system/clouds3JS.jpg'

class Sphere extends Component {

    componentDidMount() {
        ///// scene \\\\\
        this.scene = new THREE.Scene();

        ///// renderer \\\\\
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor( 0x000000, 0 );
        this.mount.appendChild(this.renderer.domElement);

        ///// camera \\\\\
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        ///// Create Earth \\\\\

        const textureLoader = new THREE.TextureLoader();

        const geometry = new THREE.SphereGeometry(2, 32, 32);

        const material = new THREE.MeshPhongMaterial({
            // const material = new THREE.MeshBasicMaterial({ 
            // color: "dodgerblue",
            // wireframe: true,
            // transparent: true,
            // opacity: .45 ,
            map: textureLoader.load(earthTexture),
            bumpMap: textureLoader.load(earthBumpTexture),
            bumpScale: 0.065
        });

        this.earth = new THREE.Mesh(geometry, material);

        ///// Clouds - Experimental \\\\\
        let cloudGeometry = new THREE.SphereGeometry(2.1, 32, 32)
        let cloudMaterial = new THREE.MeshPhongMaterial({
            map: textureLoader.load(clouds),
            side: THREE.DoubleSide,
            opacity: 0.35,
            transparent: true,
            depthWrite: false,
        });
        var cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
        this.earth.add(cloudMesh)


        ///// Add to scene \\\\\
        this.scene.add(this.earth);
        this.animation();
        this.renderer.render(this.scene, this.camera);

        const ambientLight = new THREE.AmbientLight(0xffffff, .6);

        const pointLight = new THREE.PointLight(0xffffff, .7);
        pointLight.position.x = 1;
        pointLight.position.y = 2;
        pointLight.position.z = 3;

        this.scene.add(ambientLight, pointLight);


        ///// orbit controls \\\\\
        new OrbitControls(this.camera, this.renderer.domElement);

        ///// Event Handler \\\\\
        window.addEventListener("resize", this.handleWindowResize);

    }

    animation = () => {
        requestAnimationFrame(this.animation);
        this.earth.rotation.x += 0.00050
        this.earth.rotation.y += 0.00300
        this.renderer.render(this.scene, this.camera);
    }

    handleWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene, this.camera);
    }


    render() {
        
        return (
            <div
                ref={mount => {
                    this.mount = mount;
                }}
            />
        )
    }
}

export default Sphere;