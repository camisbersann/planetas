import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PlanetClass from '../../models/planet';
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title';
import list from '../../models/planetList';

export default function Details({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () =>{
    navigation.navigate("Home", { planet: data, edit: true});
  };

  const deletePlanet = () => {
    list.remove(data.id);
    navigation.navigate("PlanetsRegistered")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>

      {data? (
        <Text style={styles.textDetails}>Detalhes do planeta</Text>
      ) : (
        <Text>Selecione um planeta para exibir seus detalhes</Text>
      )}

    <View style={styles.cardDetails}>
      <View style={styles.card}>
      <Text style={styles.textTitle}>{data.nomePlaneta}</Text>
    <Text style={styles.text}>Data Conquista: {data.dataConquista}</Text>
    <Text style={styles.text}>Cor Pimária: {data.corPrimaria}</Text>
    <Text style={styles.text}>Cor Secundária: {data.corSecundaria}</Text>
    <Text style={styles.text}>População: {data.populacao}</Text>
    <Text style={styles.text}>Recursos Naturais: {data.recursosNaturais}</Text>
    <Text style={styles.text}>Assentamentos Humanos: {data.numeroAssentamentos}</Text>
    <Text style={styles.text}>Galáxia: {data.galaxia}</Text>
    <Text style={styles.text}>Sistema Solar: {data.sistemaSolar}</Text>
    <Text style={styles.text}>Coordenadas: {data.coordenadas}</Text>
    <Text style={styles.text}>Nome Governante: {data.nomeGovernante}</Text>
    <Text style={styles.text}>Título: {data.titulo}</Text>

        <View style={styles.planetAction}>
        <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
        <Text>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={deletePlanet}>
        <Text>Remover</Text>
      </TouchableOpacity>
        </View>
    
      </View>
    
    </View>
    </View>
  )
}