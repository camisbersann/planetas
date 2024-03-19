import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import { Desenvolvedor } from '../../data/Desenvolvedor';

export default function Developer() {

  return (
    <View style={styles.container}>
      <Text>{Desenvolvedor.name}</Text>
      <Text>{Desenvolvedor.email}</Text>
      <Text>{Desenvolvedor.descrição}</Text>
    </View>
  )
}