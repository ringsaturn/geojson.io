// Protomaps API Key - configure via environment variable
const PROTOMAPS_API_KEY =
  (typeof process !== 'undefined' &&
    process.env &&
    process.env.VITE_PROTOMAPS_API_KEY) ||
  'c7f327a1deae97a6';

module.exports = [
  {
    title: 'Light',
    style: `https://api.protomaps.com/styles/v5/light/en.json?key=${PROTOMAPS_API_KEY}`
  },
  {
    title: 'Dark',
    style: `https://api.protomaps.com/styles/v5/dark/en.json?key=${PROTOMAPS_API_KEY}`
  },
  {
    title: 'Grayscale',
    style: `https://api.protomaps.com/styles/v5/grayscale/en.json?key=${PROTOMAPS_API_KEY}`
  },
  {
    title: 'White',
    style: `https://api.protomaps.com/styles/v5/white/en.json?key=${PROTOMAPS_API_KEY}`
  },
  {
    title: 'Black',
    style: `https://api.protomaps.com/styles/v5/black/en.json?key=${PROTOMAPS_API_KEY}`
  },
  {
    title: 'OSM',
    style: {
      name: 'osm',
      version: 8,
      glyphs:
        'https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf',
      sources: {
        'osm-raster-tiles': {
          type: 'raster',
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      },
      layers: [
        {
          id: 'osm-raster-layer',
          type: 'raster',
          source: 'osm-raster-tiles',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    }
  }
];
