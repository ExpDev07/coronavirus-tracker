import { action } from '@ember/object';
import Component from '@glimmer/component';
import { Map, TileLayer } from 'leaflet'

export default class MapComponent extends Component {

  /**
   * Gets the data.
   */
  get data() {
   return this.args.data || [];
  }

  /**
   *
   * @param {HTMLElement} element
   */
  @action
  setup(element) {
    // Reset HTML.
    element.innerHTML = '';

    // Dark mode map layer.
    const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png');

    // Create the map and target element.
    const map = new Map(element, {
      // Center point.
      center: [ 51.505, -0.09 ],

      // Zooming.
      zoom: 4.5,
      maxZoom: 12,
      minZoom: 3,

      // Starting layers.
      layers: [ layer ],

      // No visible controls.
      attributionControl: false,
      zoomControl: false,

      // Bounds.
      maxBoundsViscosity: 0.70,
      /*maxBounds: [
        [ 82.678526, 190.797455 ],
        [ -66.485229, 513.380405 ]
      ]*/
    });

    // Fly to China (point of interest)!
    map.flyTo([ 35.0000, 103.0000 ]);

  }

}
