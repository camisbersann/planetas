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
    <ImageBackground source={require('../../../assets/sistemaSolar01.jpg')} style={styles.container}>

    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Planeta" : "Cadastrar Planeta"} />

      <TextInput style={styles.planetInput} placeholder='Nome do Planeta'placeholderTextColor={'#ffff'} onChangeText={setNomePlaneta} value={nomePlaneta} keyboardType='email-address'/>

      {showPicker && (
        <DateTimePicker mode="date" display='spinner' value={date} onChange={onChange}/>
      )}

        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
          <TextInput style={styles.planetInput} placeholder='Data da Conquista' placeholderTextColor={'#ffff'} onChangeText={setDataConquista} value={dataConquista} editable={false}/>
          </Pressable>
        )}
      
      
      <TextInput style={styles.planetInput} placeholder='Cor Primária'placeholderTextColor={'#ffff'} onChangeText={setCorPrimaria} value={corPrimaria} keyboardType='email-address'/>
      <TextInput style={styles.planetInput} placeholder='Cor  Secundária' placeholderTextColor={'#ffff'} onChangeText={setCorSecundaria} value={corSecundaria} keyboardType='email-address'/>
      <TextInput style={styles.planetInput} placeholder='População' placeholderTextColor={'#ffff'} onChangeText={setPopulacao} value={populacao} keyboardType='numeric'/>
      <TextInput style={styles.planetInput} placeholder='Assentamentos Humanos' placeholderTextColor={'#ffff'} onChangeText={setAssentamentos} value={assentamentos} keyboardType='numeric'/>
      <TextInput style={styles.planetInput} placeholder='Galáxia' placeholderTextColor={'#ffff'} onChangeText={setGalaxia} value={galaxia} keyboardType='email-address'/>
      <TextInput style={styles.planetInput} placeholder='Sistema Solar' placeholderTextColor={'#ffff'} onChangeText={setSistemaSolar} value={sistemaSolar} keyboardType='email-address'/>
      <TextInput style={styles.planetInput} placeholder='Coordenadas' placeholderTextColor={'#ffff'} onChangeText={setCoordenadas} value={coordenadas} keyboardType='numeric'/>
      <TextInput style={styles.planetInput} placeholder='Nome do Governante' placeholderTextColor={'#ffff'} onChangeText={setNomeGovernante} value={nomeGovernante} keyboardType='email-address'/>
      <TextInput style={styles.planetInput} placeholder='Título' placeholderTextColor={'#ffff'} onChangeText={setTitulo} value={titulo} keyboardType='email-address'/>

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
