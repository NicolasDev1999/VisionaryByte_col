declare module 'three/examples/jsm/objects/Lensflare' {
  import { Light, Texture } from 'three';

  export class Lensflare extends Light {
    constructor();
    addElement(element: LensflareElement): void;
  }

  export class LensflareElement {
    constructor(texture: Texture, size?: number, distance?: number, color?: number);
  }
}
