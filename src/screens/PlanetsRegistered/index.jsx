//Importação necessária do React Native;
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
//Importação dos estilos;
import styles from "./styles";
//Importação dos hooks para navegação entre telas;
import { useIsFocused, useNavigation } from "@react-navigation/native";
//Impotação da classe;
import list from "../../models/planetList";
//Importação do ícone;
import { FontAwesome5 } from '@expo/vector-icons';

//Definição do componete PlanetsRegistered;
export default function PlanetsRegistered() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  //Estado para amazenar todos os planetas;
  const [allPlanets, setAllPlanets] = useState([]);

  //Atualiza a lista de palnetas quando a tela está em foco;
  useEffect(() => {
    if(isFocused) {
      const planets = list.getAll();
      setAllPlanets(planets);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planetas 🪐</Text>

      {allPlanets.length > 0 ? (
        <View style= {styles.planetList}>
          {allPlanets.map((planet) => (
            <View key={planet.id} style={styles.planetItem}>
              <View>
                <Text style={styles.planetName}>{planet.nomePlaneta} <FontAwesome5 name="globe" size={25}></FontAwesome5></Text>

                <View style={styles.caixinha}>
                  <Text style={styles.text}>Governante: </Text>
                  <Text style={styles.info}>{planet.nomeGovernante}</Text>
                </View>

                <View style={styles.caixinha}>
                  <Text style={styles.text}>Galáxia: </Text>
                  <Text style={styles.info}>{planet.galaxia}</Text>
                </View>

                <View style={styles.planetActions}>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate("Details", {data: planet})}>
                  <Text style={styles.textDetails}>Detalhes <FontAwesome5 name="info-circle" size={16}></FontAwesome5></Text>
                </TouchableOpacity>
              </View>
              </View>

             
              </View>
          ))}
          </View>
      ) : (
        <Text>Não há planetas cadastrados</Text>
      )}
    </View>
  );
}
