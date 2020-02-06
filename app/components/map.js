import Component from '@glimmer/component';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import { OSM } from 'ol/source';

export default class MapComponent extends Component {

  /**
   *
   * @param {HTMLElement} element
   */
  setup(element) {
    // Reset HTML.
    element.innerHTML = '';

    // Create the map and target element.
    new Map({
      target: element,
      controls: [],
      layers: [
        new Tile({
          source: new OSM(),
          className: 'map-layer'
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 3
      })
    });
  }

}
