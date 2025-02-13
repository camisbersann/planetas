import { View, Text } from 'react-native';
import styles from './styles';

const CardHome = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        Bem-vindo ao nosso emocionante aplicativo de conquistador de planetas!
        Aqui, você pode mergulhar em uma jornada cósmica única, onde cada estrela esconde um mundo esperando para ser descoberto e colonizado.
        Com este aplicativo, você pode facilmente cadastrar novos planetas, explorar os detalhes fascinantes de cada um deles, 
        editar suas informações conforme necessário e até mesmo apagá-los se desejar.
         Além disso, não deixe de conferir os detalhes do desenvolvedor para saber mais sobre as mentes por trás desta incrível jornada pelo 
        espaço. Prepare-se para uma aventura intergaláctica e comece sua jornada de conquista planetária agora mesmo!</Text>
    </View>
  )
}

export default CardHome;