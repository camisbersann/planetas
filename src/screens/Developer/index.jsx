//Importação necessária do React Native;
import { View, Text, Image } from 'react-native';
//Importação do estilo;
import styles from './styles';
//Importação dos dados do desenvolvedor;
import { Desenvolvedor } from '../../data/Desenvolvedor';
//Importação dos icones utilizados;
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Definição do componente Developer;
export default function Developer() {

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/camila02.jpeg')} style={styles.image}></Image>
      <Text style={styles.name}>{Desenvolvedor.name}</Text>
      <Text style={styles.developerInfo}>{Desenvolvedor.email}</Text>
      <Text style={styles.developerInfo}>{Desenvolvedor.nacionalidade}</Text>

      <View style={styles.line}></View>

      <Text style={styles.descricao}>{Desenvolvedor.descrição}</Text>

      <View style={styles.line}></View>

      <View style={styles.icons}>
      <AntDesign name='github' size={40} color="black"/>
      <FontAwesome5 name="react" size={40} color="black" />
      <FontAwesome5 name="node-js" size={40} color="black" />
      <Ionicons name="logo-javascript" size={40} color="black" />
      </View>
      
    </View>
  )
}