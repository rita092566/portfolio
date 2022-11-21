import * as THREE from 'three';
import Gl from './index'
import GlObject from './GlObject'
import vertex from './glsl/vertex-01.glsl'
import fragment from './glsl/fragment-01.glsl'
import gsap from 'gsap';
import glsl from 'glslify';

const planeGeometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
const planeMaterial = new THREE.ShaderMaterial({
  vertexShader: glsl(vertex),
  fragmentShader: glsl(fragment),
});

const loader = new THREE.TextureLoader();

export default class extends GlObject {
  init(el, index) {
    super.init(el);

    this.geometry = planeGeometry;
    this.material = planeMaterial.clone();
    
    this.material.uniforms = {
      uTexture: { value: 0 },
      uTime: { value: 0 },
      uProg: { value: 0 },
      uIndex: { value: index },
    }

    this.img = this.el.querySelector('img');
    this.texture = loader.load(this.img.src, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      
      this.material.uniforms.uTexture.value = texture;
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh);
    
    Gl.scene.add(this);
    this.addEvents(index);
  }

  updateTime(time) {
    this.material.uniforms.uTime.value = time;
  }

  addEvents(index) {
    this.mouseEnter();
    this.mouseLeave();
    this.mouseClick(index+2);
  }


  mouseClick(index) {
    this.el.addEventListener('mouseup', () => {
      console.log('https://rita092566.github.io/portfolio/index' + index + '.html')
      window.open('https://rita092566.github.io/portfolio/index' + index + '.html','_self');
    });
  }

  mouseEnter() {
    this.el.addEventListener('mouseenter', () => {
      gsap.to(this.material.uniforms.uProg, {
        // duration: 1,
        value: 1,
        ease: 'power.inOut',
      });
    });
  }

  mouseLeave() {
    this.el.addEventListener('mouseleave', () => {
      gsap.to(this.material.uniforms.uProg, {
        // duration: 1,
        value: 0,
        ease: 'power.inOut',
      });
    });
  }
}