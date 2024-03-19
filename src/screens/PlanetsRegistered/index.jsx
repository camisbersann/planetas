import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import TouchableButton from '../../components/TouchableButton';
import PlanetList from '../../models/planetList';

const list = new PlanetList();

export default function PlanetsRegistered({ route }) {
   const { category } = route.params;

   const renderItem = () => (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { list })}>
      <Text>{list.nomePlaneta}</Text>
    </TouchableOpacity>
   );

  return (
    <View style={styles.container}>

      <FlatList data={category.list} renderItem={renderItem} keyExtractor={(list) => list.id}/>
    </View>
  )
}