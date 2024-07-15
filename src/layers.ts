import VectorTileLayer from "ol/layer/VectorTile";
import { VectorTile } from "ol/source";
import { MVT } from "ol/format";
import { Fill, Stroke, Style } from "ol/style";

const apiKey = "o6gkQfu7YfEL2lh5lVEU";

export const countries = new VectorTileLayer({
  source: new VectorTile({
    minZoom: 1,
    maxZoom: 12,
    attributions:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    format: new MVT(),
    url: `https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=${apiKey}`,
  }),
  style: new Style({
    stroke: new Stroke({
      color: "#ff0000",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(255, 0, 0, 0.1)",
    }),
  }),
});

export const contours = new VectorTileLayer({
  source: new VectorTile({
    minZoom: 9,
    maxZoom: 14,
    attributions:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    format: new MVT(),
    url: `https://api.maptiler.com/tiles/contours/{z}/{x}/{y}.pbf?key=${apiKey}`,
  }),
  style: new Style({
    stroke: new Stroke({
      color: "#ff00FF",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(255, 0, 0, 0.1)",
    }),
  }),
});
