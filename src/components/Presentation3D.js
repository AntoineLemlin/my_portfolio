import * as THREE from "three";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Presentation3D = () => {
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    const textureLoader = new THREE.TextureLoader();

    // Scene
    const scene = new THREE.Scene();

      //Controls
      const mouseMove = {
        x: 0,
    }
      window.addEventListener('mousemove', (event) => {
        mouseMove.x = ( event.clientX / window.innerWidth ) * 3 - 1;
      })

    for(let j = 0; j<=6; j++){
      const vertices = [];

      for ( let i = 0; i < 15; i ++ ) {
      
        const x = THREE.MathUtils.randFloatSpread( 20 );
        const y = THREE.MathUtils.randFloatSpread( 20 );
        const z = THREE.MathUtils.randFloatSpread( 20 );
    
        vertices.push( x, y, z );
        
      }
        const geometry = new THREE.SphereBufferGeometry(4,3,2);
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        
        const reactTexture = textureLoader.load(`./textures/techno${j}.png`)
        
        const material = new THREE.PointsMaterial( { map: reactTexture, size: 2, transparent: false, alphaTest: 0.5 } );
        
      
      
      const points = new THREE.Points( geometry, material );
      
      scene.add( points );
      
      points.position.z = 65
      points.position.x = -25

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      if (window.matchMedia("(max-width: 1024px)").matches) {
        camera.position.x = -25;
        camera.position.z = 75
        material.size = 0.75
      } else {
        camera.position.x = 0;
        camera.position.z = 100
        material.size = 2

      }

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      150
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 100;
  
    scene.add(camera);

    if (window.matchMedia("(max-width: 1024px)").matches) {
      camera.position.x = -25;
      camera.position.z = 75
      material.size = 0.75
    }

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);

  


  const tick = () => {
    requestAnimationFrame(tick);
    points.rotation.y = mouseMove.x;
    renderer.render(scene, camera);
  };
  tick();

}

    

    // Geometry

    //Lights

    const pointLightDeck = new THREE.PointLight(0x404040, 1);
    pointLightDeck.position.x = 7;
    pointLightDeck.position.y = 5;
    pointLightDeck.position.z = 85;

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(pointLightDeck, ambientLight);

    
    
  });
  return (
    <motion.canvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="webgl"
    ></motion.canvas>
  );
};

export default Presentation3D;
