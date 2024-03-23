import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground, Pressable, Platform } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Inputs from '../../components/Inputs';
import PlanetClass from '../../models/planet';
import list from '../../models/planetList';
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Home({ route }) {
  const navigation = useNavigation();

  // Verifica se route e route.params existem antes de acessá-los
  const planetParams = route?.params?.planet;
  const edit = route?.params?.edit;

  const [nomePlaneta, setNomePlaneta] = useState('');
  const [dataConquista, setDataConquista] = useState('');
  const [corPrimaria, setCorPrimaria] = useState('');
  const [corSecundaria, setCorSecundaria] = useState('');
  const [populacao, setPopulacao] = useState('');
  const [recursosNaturais, setRecursosNaturais] = useState('');
  const [assentamentos, setAssentamentos] = useState('');
  const [galaxia, setGalaxia] = useState('');
  const [sistemaSolar, setSistemaSolar] = useState('');
  const [coordenadas, setCoordenadas] = useState('');
  const [nomeGovernante, setNomeGovernante] = useState('');
  const [titulo, setTitulo] = useState('');
  const [isUpdate, setIsUpdate] = useState(edit);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange= ({ type }, selectDate) => {
    if(type == "set"){
      const currentDate = selectDate;
      setDate(currentDate);

      if(Platform.OS === "android"){
        toggleDatepicker();
        setDataConquista(currentDate.toDateString());
      }

    } else {
      toggleDatepicker();
    }
  };


  useEffect(() => {
    if (edit) {
      setNomePlaneta(planetParams.nomePlaneta);
      setDataConquista(planetParams.dataConquista);
      setCorPrimaria(planetParams.corPrimaria);
      setCorSecundaria(planetParams.corSecundaria);
      setPopulacao(planetParams.populacao);
      setRecursosNaturais(planetParams.recursosNaturais);
      setAssentamentos(planetParams.assentamentos);
      setGalaxia(planetParams.galaxia)
      setSistemaSolar(planetParams.sistemaSolar);
      setCoordenadas(planetParams.coordenadas);
      setNomeGovernante(planetParams.nomeGovernante);
      setTitulo(planetParams.titulo);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planetParams, edit]);

  const handlePlanetAction = () => {
    if (isUpdate) {
      list.update(planetParams.id, nomePlaneta, corPrimaria, corSecundaria, populacao, recursosNaturais, assentamentos, galaxia, sistemaSolar, coordenadas, nomeGovernante, titulo);
      clearInputs();
    } else {
      const newPlanet = new PlanetClass(nomePlaneta, dataConquista, corPrimaria, corSecundaria, populacao, recursosNaturais, assentamentos, galaxia, sistemaSolar, coordenadas, nomeGovernante, titulo);
      list.addPlanet(newPlanet);
      clearInputs();
    }
    navigation.navigate("PlanetsRegistered");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    setNomePlaneta('');
    setDataConquista('');
    setCorPrimaria('');
    setCorSecundaria('');
    setRecursosNaturais('');
    setPopulacao('');
    setAssentamentos('');
    setGalaxia('');
    setSistemaSolar('');
    setCoordenadas('');
    setNomeGovernante('');
    setTitulo('');
  }

  return (
    <ImageBackground source={require('../../../assets/sistemaSolar.jpg')} style={styles.container}>

    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Planeta" : "Cadastrar Planeta"} />

      <TextInput style={styles.planetInput} placeholder='Nome do Planeta' onChangeText={setNomePlaneta} value={nomePlaneta}/>

      {showPicker && (
        <DateTimePicker mode="date" display='spinner' value={date} onChange={onChange}/>
      )}

        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
          <TextInput style={styles.planetInput} placeholder='Data da Conquista' onChangeText={setDataConquista} value={dataConquista} editable={false}/>
          </Pressable>
        )}
      
      
      <TextInput style={styles.planetInput} placeholder='Cor Primária' onChangeText={setCorPrimaria} value={corPrimaria}/>
      <TextInput style={styles.planetInput} placeholder='Cor  Secundária' onChangeText={setCorSecundaria} value={corSecundaria}/>
      <TextInput style={styles.planetInput} placeholder='População' onChangeText={setPopulacao} value={populacao}/>
      <TextInput style={styles.planetInput} placeholder='Assentamentos Humanos' onChangeText={setAssentamentos} value={assentamentos}/>
      <TextInput style={styles.planetInput} placeholder='Galáxia' onChangeText={setGalaxia} value={galaxia}/>
      <TextInput style={styles.planetInput} placeholder='Sistema Solar' onChangeText={setSistemaSolar} value={sistemaSolar}/>
      <TextInput style={styles.planetInput} placeholder='Coordenadas' onChangeText={setCoordenadas} value={coordenadas}/>
      <TextInput style={styles.planetInput} placeholder='Nome do Governante' onChangeText={setNomeGovernante} value={nomeGovernante}/>
      <TextInput style={styles.planetInput} placeholder='Título' onChangeText={setTitulo} value={titulo}/>

      <TouchableOpacity style={styles.button} onPress={handlePlanetAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
    </ImageBackground>
  );
}
