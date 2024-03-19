import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

export default function Details() {
  return (
    <View style={styles.container}>
      <Title title={"Details"}/>
    </View>
  )
}