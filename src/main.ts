import { default as OLMap } from "ol/Map";
import "./style.css";

const element = document.getElementById("app")!!;

const map = new OLMap({
  target: element,
});
