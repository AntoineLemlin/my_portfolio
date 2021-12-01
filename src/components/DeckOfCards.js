import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useEffect } from "react";
import { motion } from "framer-motion";

const DeckOfCards = () => {
  useEffect(() => {
    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Scene
    const scene = new THREE.Scene();

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
        camera.position.x = 13;
      } else {
        camera.position.x = 0;
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
      camera.position.x = 13;
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

    //Controls

    // const controls = new OrbitControls(camera, renderer.domElement);

    //Textures

    const textureLoader = new THREE.TextureLoader();
    const deckTexture = textureLoader.load(
      "./textures/Bicycle_Deck_Texture.png"
    );

    const deckMap = new THREE.MeshStandardMaterial({ map: deckTexture });

    // Import Obj

    const loader = new OBJLoader();
    loader.load("./models/Bicycle_Deck2.obj", function (object) {
      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = deckMap;
        }
      });
      scene.add(object);

      object.position.z = 82;
      object.position.x = 13;

      object.rotation.z = 4.7;
      object.rotation.y = 6;

      const clock = new THREE.Clock();

      const tick = () => {
        requestAnimationFrame(tick);
        const elapsedTime = clock.getElapsedTime();

        object.rotation.y = (elapsedTime * Math.PI) / 10;
        object.rotation.x = (elapsedTime * Math.PI) / 10;

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
      };

      tick();
    });


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

export default DeckOfCards;
