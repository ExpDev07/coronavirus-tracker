import { action } from '@ember/object';
import Component from '@glimmer/component';
import { Map, TileLayer, Circle } from 'leaflet'

/**
 * Calculates a radius based on the amount of cases.
 *
 * @param {number} cases The amount of cases.
 * @param {number} multiplier Amount to multiply cases with.
 * @param {number} min Minimum radius.
 * @param {number} max Maximum radius.
 */
function calculateRadius(cases, multiplier, min, max) {

  // Calculate radius.
  const radius = cases * multiplier;

  // Check for min and max.
  if (radius < min) return min;
  if (radius > max) return max;

  // Return radius.
  return radius;
}

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

    // Create the map and target element.
    const map = new Map(element, {
      // Center point.
      center: [ 51.505, -0.09 ],

      // Zooming.
      zoom: 4.5,
      maxZoom: 12,
      minZoom: 3,

      // Starting layers.
      layers: [
        new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png'),
      ],

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

    // Draw circles at coordinates.
    for (const location of this.data) {

      // Extract data from location.
      const { coordinates, country, province, latest } = location;

      // Make sure there's coordinates.
      if (!coordinates) continue;

      // Create marker.
      const marker = new Circle([ coordinates.lat, coordinates.long ], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: calculateRadius(latest, 25, 15000, 500000),
      });

      // Bind a tooltip for info.
      marker.bindTooltip(
        `
        <h6><b>${province || country}</b></h6>

        `
      );

      // Add marker to map.
      map.addLayer(marker);

    }

    // Fly to China (point of interest)!
    map.flyTo([ 35.0000, 103.0000 ]);

  }

}
