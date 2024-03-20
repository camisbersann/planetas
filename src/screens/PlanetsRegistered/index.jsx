import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchableButton from "../../components/TouchableButton";
import PlanetList from "../../models/planetList";
import { Planet } from "../../data/Planet";
import { useNavigation } from "@react-navigation/native";

export default function PlanetsRegistered({ route }) {
  const navigation = useNavigation();
  const { allPlanets } = route.params;

  console.log("AQUIIIIIIIIIII", allPlanets);

  //list.addPlanet(Planet)

  return (
    <View style={styles.container}>
      <View>
        {allPlanets.map((onePlanet) => (
          <TouchableOpacity
            key={onePlanet.id}
            onPress={() => navigation.navigate("Details", { data: onePlanet })}
          >
            <Text>{onePlanet.nomePlaneta}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
