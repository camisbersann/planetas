 import { format } from 'date-fns';
 
 export default class PlanetClass {
    constructor(nomePlaneta, dataConquista, corPrimaria, corSecundaria, populacao, recursosNaturais, numeroAssentamentos, galaxia, sistemaSolar, coordenadas, nomeGovernante, titulo) {
        this.id = this.gerarId();
        this.nomePlaneta = nomePlaneta;
        this.dataConquista = dataConquista;
        this.corPrimaria = corPrimaria;
        this.corSecundaria = corSecundaria;
        this.populacao = populacao;
        this.recursosNaturais = recursosNaturais;
        this.numeroAssentamentos = numeroAssentamentos;
        this.galaxia = galaxia;
        this.sistemaSolar = sistemaSolar;
        this.coordenadas = coordenadas;
        this.nomeGovernante = nomeGovernante;
        this.titulo = titulo;
    }

    gerarId(){
        return Math.floor(Math.random() * 1000);
    }

    getDataConquistaPtBR(){
        if(!this.dataConquista){
            return 'Data não definida';
        }

        const data = new Date(this.dataConquista);

        if(isNaN(data.getTime())){
            return 'Data iválida'
        }
        return format(new Date(this.dataConquista), "dd/MM/yyyy");
    }
}