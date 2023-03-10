import { useState,  useEffect} from "preact/hooks";

// import fs from 'fs'


// import Map from 'ol/Map';
import Map from "https://cdn.jsdelivr.net/npm/ol@7.2.1/Map.js"
import View from 'https://cdn.jsdelivr.net/npm/ol@7.2.1/View.js';
import TileLayer from 'https://cdn.jsdelivr.net/npm/ol@7.2.1/Tile.js';
import XYZ from 'https://cdn.jsdelivr.net/npm/ol@7.2.1/source/XYZ.js';
import OSM from 'https://cdn.jsdelivr.net/npm/ol@7.2.1/source/OSM.js';

// import "https://cdn.jsdelivr.net/npm/ol@7.2.1/ol.css"

// import {
//     Map,
//     View,
//     TileLayer,

// } from "https://cdn.jsdelivr.net/npm/ol@v7.2.1/dist/ol.js";

// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';



interface MapProps {
  start?: number;
}

export default  function OLMap(props: MapProps) {
//   const [count, setCount] = useState(props.start);

const mapInit = ()=> {
 const mymap =  new Map({
    target: 'map',
    layers: [
      new TileLayer({source: new OSM(),}),
      // new TileLayer({source: new XYZ({ url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'})}),
    ],
    view: new View({
      center: [70, 60],
      zoom: 2,
    })


  });

}

useEffect(() => {
  // Trigger your effect
  
  mapInit()

  return () => {
    // Optional: Any cleanup code
  };
}, []);

  
  
// class="flex w-full h-full"
  return (
    

    <div id="map" style="border: 1; height: 800px; width: 100% ;"  />
          
    
  );
}