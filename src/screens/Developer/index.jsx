import { View, Text, Image } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import { Desenvolvedor } from '../../data/Desenvolvedor';

export default function Developer() {

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/camila02.jpeg')} style={styles.image}></Image>
      <Text style={styles.name}>{Desenvolvedor.name}</Text>
      <Text style={styles.developerInfo}>{Desenvolvedor.email}</Text>
      <Text style={styles.developerInfo}>{Desenvolvedor.nacionalidade}</Text>
      <View style={styles.line}></View>
      <Text style={styles.descricao}>{Desenvolvedor.descrição}</Text>
     
    </View>
  )
}