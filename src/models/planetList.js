//import PlanetClass from "./planet";
import { Planet } from "../data/Planet";

class PlanetList {
  constructor() {
    this.planets = [];
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  getPlanetById(id) {
    return this.planets.find((planet) => planet.id == id);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id != id);
  }

  getAll() {
    return this.planets;
  }

  update(id, name, dataConquista) {
    const user = this.getPlanetById(id);

    if (user) {
      user.name = name;
      user.dataConquista = dataConquista;
    }

    return user;
  }
}

const list = new PlanetList();

list.addPlanet(Planet);

export default list