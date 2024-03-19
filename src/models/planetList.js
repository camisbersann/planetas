class PlanetList {
    constructor(){
        this.planets = [];
    }

    addPlanet(planet){
        this.planets.push(planet);
    }

    getPlanet(id){
        return this.planets.find(planet => planet.id == id);
    }

    removePlanet(id){
        this.planets = this.planets.filter((planet) => planet.id != id);
    }

    getAll(){
        return this.planets;
    }
}