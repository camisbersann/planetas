import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PlanetClass from '../../models/planet';
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title';
import planetList from '../../models/planetList';
import list from '../../models/planetList';

export default function Details({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  // console.log("Hereee", data);

  const editPlanet = () =>{
    navigation.navigate("Home", { planet: data, edit: true});
  };

  const deletePlanet = () => {
    list.remove(data.id);
    navigation.navigate("PlanetsRegistered")
  }


  return (
    <View style={styles.container}>
      <Title title="Detalhes"/>

      {data? (
        <Text>Detalhes do planeta</Text>
      ) : (
        <Text>Selecione um planeta para exibir seus detalhes</Text>
      )}

    <View>
    <Text>{data.nomePlaneta}</Text>
    <Text>{data.dataConquista}</Text>
    <Text>{data.corPrimaria}</Text>
    <Text>{data.corSecundaria}</Text>
    </View>

    <View>
      <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
        <Text>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={deletePlanet}>
        <Text>Remover</Text>
      </TouchableOpacity>
    </View>
      
    </View>
  )
}