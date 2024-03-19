import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import TouchableButton from '../../components/TouchableButton';


export default function PlanetsRegistered({ route }) {
   const { category } = route.params;

   const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
      <Text>{item.nomePlaneta}</Text>
    </TouchableOpacity>
   );

  return (
    <View style={styles.container}>

      <FlatList data={category.items} renderItem={renderItem} keyExtractor={(item) => item.id}/>
    </View>
  )
}