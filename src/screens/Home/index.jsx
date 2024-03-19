import { View, Text } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Inputs from '../../components/Inputs';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Registrar"}/>
      <Inputs text={"Nome do Planeta"} value={Text} keyBoard="email-address"/>
    </View>
  )
}