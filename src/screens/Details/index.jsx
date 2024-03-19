import { View, Text } from 'react-native';
import styles from './styles';
import PlanetClass from '../../models/planet';

export default function Details({ route }) {
  const { planet } = route.params;

  return (
    <View style={styles.container}>
      <Text>{planet.nomePlaneta}</Text>
      <Text>{planet.corPrimaria}</Text>
    </View>
  )
}