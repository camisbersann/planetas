import { Planet } from "../data/Planet";
import PlanetClass from "./planet";

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

  update(id, nomePlaneta, dataConquista, corPrimaria, corSecundaria, populacao, recursosNaturais, numeroAssentamentos, galaxia, sistemaSolar, coordenadas, nomeGovernante, titulo) {
    const planet = this.getPlanetById(id);

    if (planet) {
      planet.nomePlaneta = nomePlaneta;
      planet.dataConquista = dataConquista;
      planet.corPrimaria = corPrimaria;
      planet.corSecundaria = corSecundaria;
      planet.populacao = populacao;
      planet.recursosNaturais = recursosNaturais;
      planet.numeroAssentamentos = numeroAssentamentos;
      planet.galaxia = galaxia;
      planet.sistemaSolar = sistemaSolar;
      planet.coordenadas = coordenadas;
      planet.nomeGovernante = nomeGovernante;
      planet.titulo = titulo;
    }

    return user;
  }
}

const list = new PlanetList();
const newPlanet = new PlanetClass(Planet.nomePlaneta, Planet.corPrimaria, Planet.corSecundaria, Planet.população, Planet.recursosNaturais, Planet.numeroAssentamentos, Planet.galáxia, Planet.sistemaSolar, Planet.coodernadas, Planet.nomeGovenador, Planet.título)

list.addPlanet(newPlanet);

export default list;