import { View, Text } from 'react-native';
import styles from './styles';
import PlanetClass from '../../models/planet';
import { useNavigation } from "@react-navigation/native";

export default function Details({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  console.log("Hereee", data);

  return (
    <View style={styles.container}>
      <Text>{data.nomePlaneta}</Text>
    </View>
  )
}