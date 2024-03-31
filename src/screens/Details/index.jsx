//Importação necessária do React Native;
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
//Importação do estilo;
import styles from "./styles";
//Importação das classes
import PlanetClass from "../../models/planet";
import list from "../../models/planetList";
//Importação do hook useNavigation para nevegação entre telas;
import { useNavigation } from "@react-navigation/native";
//Importação de ícones utilizados;
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//Definição do componete Details;
export default function Details({ route }) {
  const navigation = useNavigation();
  //Extração dos dados do planeta via rota;
  const { data } = route.params;

  //Função para editar um planeta;
  const editPlanet = () => {
    navigation.navigate("Home", { planet: data, edit: true });
  };

  //Função para excluir um planta;
  const deletePlanet = () => {
    list.remove(data.id);
    navigation.navigate("PlanetsRegistered");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>

      {data ? (
        <Text style={styles.textDetails}>Detalhes do planeta</Text>
      ) : (
        <Text>Selecione um planeta para exibir seus detalhes</Text>
      )}

      <View style={styles.cardDetails}>
        <View style={styles.card}>
          
          <Text style={styles.textTitle}>{data.nomePlaneta}</Text>

          <View style={styles.caixinha}>
            <Text style={styles.text}>Data Conquista:</Text>
            <Text style={styles.subtext}>{data instanceof PlanetClass && data.getDataConquistaPtBR()}</Text>
          </View>

          <View style={styles.caixinha}>
          <Text style={styles.text}>Cor Pimária: </Text>
          <Text>{data.corPrimaria}</Text>
          </View>
           
          <View style={styles.caixinha}>
          <Text style={styles.text}>Cor Secundária: </Text>
          <Text>{data.corSecundaria}</Text>
          </View>
           
          <View style={styles.caixinha}>
          <Text style={styles.text}>População:</Text>
          <Text> {data.populacao}</Text>
          </View>
          
          <View style={styles.caixinha}>
          <Text style={styles.text} >Recursos Naturais: </Text>
          <Text >{data.recursosNaturais}</Text>
          </View>
          
          <View style={styles.caixinha}>
          <Text style={styles.text}>Assentamentos Humanos: </Text>
          <Text>{data.numeroAssentamentos} </Text>
          </View>
         
          <View style={styles.caixinha}>
          <Text style={styles.text}>Galáxia: </Text>
          <Text> {data.galaxia}</Text>
          </View>
           
          <View style={styles.caixinha}>
          <Text style={styles.text}>Sistema Solar: </Text>
          <Text> {data.sistemaSolar}</Text>
          </View>
          
          <View style={styles.caixinha}>
          <Text style={styles.text}>Coordenadas: </Text>
          <Text>{data.coordenadas}</Text>
          </View>
           
          <View style={styles.caixinha}>
          <Text style={styles.text}>Nome Governante: </Text>
          <Text>{data.nomeGovernante}</Text>
          </View>

          <View style={styles.caixinha}>
          <Text style={styles.text}>Título: </Text>
          <Text>{data.titulo}</Text>
          </View>
           

          <View style={styles.planetAction}>
            <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
              <Text>
                Editar <AntDesign name="edit" size={15} color="black"></AntDesign>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={deletePlanet}
            >
              <Text>
                Remover <FontAwesome5 name="trash" size={15} color="black"></FontAwesome5>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
   
  );
}
