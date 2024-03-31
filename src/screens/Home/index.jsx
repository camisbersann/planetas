//Importações do React Native;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";
//Importações de estilos e componentes;
import styles from "./styles";
import Title from "../../components/Title";
import PlanetClass from "../../models/planet";
import list from "../../models/planetList";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PlaceHolder from "../../components/PlaceHolder";
import CardHome from "../../components/CardHome";

//Definição do componete Home;
export default function Home({ route }) {
  //Hook para acessar a navegação;
  const navigation = useNavigation();

  // Verifica se route e route.params existem antes de acessá-los
  const planetParams = route?.params?.planet;
  const edit = route?.params?.edit;

  // console.log("tela de edição", planetParams)

  //Declaração de estados;
  const [nomePlaneta, setNomePlaneta] = useState("");
  const [dataConquista, setDataConquista] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("");
  const [corSecundaria, setCorSecundaria] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [recursosNaturais, setRecursosNaturais] = useState("");
  const [assentamentos, setAssentamentos] = useState("");
  const [galaxia, setGalaxia] = useState("");
  const [sistemaSolar, setSistemaSolar] = useState("");
  const [coordenadas, setCoordenadas] = useState("");
  const [nomeGovernante, setNomeGovernante] = useState("");
  const [titulo, setTitulo] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectDate) => {
    if (type == "set") {
      const currentDate = selectDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
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
      setAssentamentos(planetParams.numeroAssentamentos);
      setGalaxia(planetParams.galaxia);
      setSistemaSolar(planetParams.sistemaSolar);
      setCoordenadas(planetParams.coordenadas);
      setNomeGovernante(planetParams.nomeGovernante);
      setTitulo(planetParams.titulo);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planetParams, edit]);

  //Função para lidar com a ação (editar ou apagar);
  const handlePlanetAction = () => {
    let mayAdd = verificaton();

    if (mayAdd) {
      if (isUpdate) {
        list.update(
          planetParams.id,
          nomePlaneta,
          dataConquista,
          corPrimaria,
          corSecundaria,
          populacao,
          recursosNaturais,
          assentamentos,
          galaxia,
          sistemaSolar,
          coordenadas,
          nomeGovernante,
          titulo
        );
        clearInputs();
      } else {
        const newPlanet = new PlanetClass(
          nomePlaneta,
          dataConquista,
          corPrimaria,
          corSecundaria,
          parseInt(populacao),
          recursosNaturais,
          parseInt(assentamentos),
          galaxia,
          sistemaSolar,
          coordenadas,
          nomeGovernante,
          titulo
        );
       
        list.addPlanet(newPlanet);
        clearInputs();
        newPlanet.getDataConquistaPtBR();
        // console.log(newPlanet.getDataConquistaPtBR());
      }
      //Navegação para a tela PlanetsRegistered;
      navigation.navigate("PlanetsRegistered");
    } else {
      return;
    }
  };

  //Função para limpar os campos do formulário
  const clearInputs = () => {
    setIsUpdate(false);
    setNomePlaneta("");
    setDataConquista("");
    setCorPrimaria("");
    setCorSecundaria("");
    setRecursosNaturais("");
    setPopulacao("");
    setAssentamentos("");
    setGalaxia("");
    setSistemaSolar("");
    setCoordenadas("");
    setNomeGovernante("");
    setTitulo("");
  };

  //Função de verificação;
  const verificaton = () => {
    let errors = [];

    if (!nomePlaneta || nomePlaneta.length < 3) {
      errors.push(
        "Nome inválido, digite o nome do planeta com mais de três caracteres"
      );
    }

    if (!dataConquista || dataConquista < new Date()) {
      errors.push("Digite uma data válida");
    }

    if (!corPrimaria) {
      errors.push("Digite a cor primária");
    }

    if (!corSecundaria) {
      errors.push("Digite a cor secundária");
    }

    if (!recursosNaturais) {
      errors.push("Digite os recursos naturais");
    }

    if (!populacao) {
      errors.push("Digite a população do planeta");
    }

    if (!assentamentos) {
      errors.push("Digite o número de assentamentos humanos");
    }

    if (!galaxia) {
      errors.push("Digite uma galáxia");
    }

    if (!sistemaSolar) {
      errors.push("Digite o sistema solar");
    }

    if (!coordenadas) {
      errors.push("Digite as coordenadas do planeta");
    }

    if (!nomeGovernante || nomeGovernante.length < 3) {
      errors.push(
        "Nome do governate inválido, digite o nome do governante com mais de três caracteres"
      );
    }

    if (!titulo) {
      errors.push("Digite um título");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    } else {
      return true;
    }
  };

  //Retorno do componente Home
  return (
    <ImageBackground
      source={require("../../../assets/galaxia01.jpeg")}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.container}>
          <CardHome/>
          <Title title={isUpdate ? "Editar Planeta" : "Cadastrar Planeta 🪐"} />

          <PlaceHolder placeHolder={"Nome do planeta"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setNomePlaneta}
            value={nomePlaneta}
            keyboardType="email-address"
          />

          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              dateFormat="dd/MM/yyyy"
            />
          )}

          {!showPicker && (
            <Pressable onPress={toggleDatepicker}>
              <PlaceHolder placeHolder={"Data da Conquista"} />
              <TextInput
                style={styles.planetInput}
                onChangeText={setDataConquista}
                value={dataConquista}
                editable={false}
              />
            </Pressable>
          )}
  
          <PlaceHolder placeHolder={"Cor Primária"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setCorPrimaria}
            value={corPrimaria}
            keyboardType="email-address"
          />
          <PlaceHolder placeHolder={"Cor Secundária"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setCorSecundaria}
            value={corSecundaria}
            keyboardType="email-address"
          />
          <PlaceHolder placeHolder={"População"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setPopulacao}
            value={populacao.toString()}
            keyboardType="numeric"
          />
          <PlaceHolder placeHolder={"Número de assentamentos Humanos"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setAssentamentos}
            value={assentamentos.toString()}
            keyboardType="numeric"
          />

          <PlaceHolder placeHolder={"Recursos Naturais"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setRecursosNaturais}
            value={recursosNaturais}
            keyboardType="email-address"
          />

          <PlaceHolder placeHolder={"Galáxia"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setGalaxia}
            value={galaxia}
            keyboardType="email-address"
          />
          <PlaceHolder placeHolder={"Sistema Solar"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setSistemaSolar}
            value={sistemaSolar}
            keyboardType="email-address"
          />
          <PlaceHolder placeHolder={"Coordenadas"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setCoordenadas}
            value={coordenadas}
            keyboardType="numeric"
          />
          <PlaceHolder placeHolder={"Nome do Governate"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setNomeGovernante}
            value={nomeGovernante}
            keyboardType="email-address"
          />
          <PlaceHolder placeHolder={"Título"} />
          <TextInput
            style={styles.planetInput}
            onChangeText={setTitulo}
            value={titulo}
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.button} onPress={handlePlanetAction}>
            <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta 🌑"}</Text>
          </TouchableOpacity>

          {isUpdate && (
            <TouchableOpacity style={styles.button} onPress={clearInputs}>
              <Text>Cancelar Edição</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
