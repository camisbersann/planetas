import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Inputs from '../../components/Inputs';
import { useEffect, useState } from 'react';
import PlanetClass from '../../models/planet';
import list from '../../models/planetList';
import { useNavigation } from "@react-navigation/native";



export default function Home() {
  let { planet, edit } = route.params;
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [dataConquista, setDataConquista] = useState('');
  const [corPrimaria, setCorPrimaria] = useState('');
  const [corSecundaria, setCorSecundaria] = useState('');
  const [populacao, setPopulacao] = useState('');
  const [recursosNaturais, setRecursosNaturais] = useState('');
  const [assentamentos, setAssentamentos] = useState('');
  const [galaxia, setGalaxia] = useState('');
  const [sistemaSolar, setsistemaSolar] = useState('');
  const [coordenadas, setCoordenadas] = useState('');
  const [nomeGovernante, setNomeGovernante] = useState('');
  const [titulo, setTitulo] = useState('');
  const [isUpdate, setIsUpdate] = useState(edit);

  useEffect(() => {
    if(edit){
      setNome(planet.nome);
      setDataConquista(planet.dataConquista);
      setCorPrimaria(planet.corPrimaria);
      setCorSecundaria(planet.corSecundaria);
      setPopulacao(planet.populacao);
      setRecursosNaturais(planet.recursosNaturais);
      setAssentamentos(planet.assentamentos);
      setGalaxia(planet.galaxia)
      setsistemaSolar(planet.sistemaSolar);
      setCoordenadas(planet.coordenadas);
      setNomeGovernante(planet.nomeGovernante);
      setTitulo(planet.titulo);
      setIsUpdate(true);
    }else {
      clearInputs();
    }
  }, [planet, edit]);

  const handlePlanetAction = () => {
    if(isUpdate) {
      list.update(planet.id, nome, corPrimaria, corSecundaria, populacao, recursosNaturais, assentamentos, galaxia, sistemaSolar, coordenadas, nomeGovernante, titulo);
      clearInputs();
    } else {
      const newPlanet = new PlanetClass(nome, dataConquista, corPrimaria, corSecundaria, populacao, recursosNaturais, assentamentos, galaxia, sistemaSolar, coordenadas, nomeGovernante, titulo);
      list.addPlanet(newPlanet);
      clearInputs();
    }
  navigation.navigate("PlanetsRegistered");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setNome('');
    setDataConquista('');
    setCorPrimaria('');
    setCorSecundaria('');
    setRecursosNaturais('');
    setPopulacao('');
    setAssentamentos('');
    setGalaxia('');
    setsistemaSolar('');
    setCoordenadas('');
    setNomeGovernante('');
    setTitulo('');
  }


  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Planeta" : "Novo Planeta"}/>

      <Inputs text={"Nome do Planeta"} value={nome} keyBoard="email-address" onChangeText={setNome}/>
      <Inputs text={"Data da Conquista"} value={dataConquista} keyBoard="numeric" onChangeText={setDataConquista}/>
      <Inputs text={"Cor Primária"} value={corPrimaria} keyBoard="email-address" onChangeText={setCorPrimaria}/>
      <Inputs text={"Cor Secundária"} value={corSecundaria} keyBoard="email-address" onChangeText={setCorSecundaria}/>
      <Inputs text={"Recursos Naturais"} value={recursosNaturais} keyBoard="email-address" onChangeText={setRecursosNaturais}/>
      <Inputs text={"População"} value={populacao} keyBoard="numeric" onChangeText={setPopulacao}/>
      <Inputs text={"Número Assentamentos Humanos"} value={assentamentos} keyBoard="numeric" onChangeText={setAssentamentos}/>
      <Inputs text={"Galáxia"} value={galaxia} keyBoard="email-address" onChangeText={setGalaxia}/>
      <Inputs text={"Sistema Solar"} value={sistemaSolar} keyBoard="email-address" onChangeText={setsistemaSolar}/>
      <Inputs text={"Coordenadas"} value={coordenadas} keyBoard="numeric" onChangeText={setCoordenadas}/>
      <Inputs text={"Nome do Governante"} value={nomeGovernante} keyBoard="email-address" onChangeText={setNomeGovernante}/>
      <Inputs text={"Título"} value={titulo} keyBoard="email-address" onChangeText={setTitulo}/>

    <TouchableOpacity style={styles.button} onPress={createPlanet}>
      <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
    </TouchableOpacity>

    {isUpdate && (
       <TouchableOpacity onPress={clearInputs}>
       <Text>Cancelar Edição</Text>
     </TouchableOpacity>
    )} 
    </View>
  )
}