import { View, Text } from 'react-native';
import styles from './styles';

const PlaceHolder = ({placeHolder}) => {
  return (
    <View>
      <Text style={styles.placeHolder}>{placeHolder}</Text>
    </View>
  )
}

export default PlaceHolder;