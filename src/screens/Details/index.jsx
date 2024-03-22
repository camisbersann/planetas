import { View, Text } from 'react-native';
import styles from './styles';
import PlanetClass from '../../models/planet';
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title';

export default function Details({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  // console.log("Hereee", data);

  
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
      
    </View>
  )
}