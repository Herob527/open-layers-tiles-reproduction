import { default as OLMap } from "ol/Map";
import "./style.css";
import { View } from "ol";
import { countries, contours } from "./layers";

const element = document.getElementById("app")!!;

const view = new View({
  center: [0, 0],
  zoom: 12,
});

new OLMap({
  target: element,
  view,
  controls: [],
  layers: [countries, contours],
});
