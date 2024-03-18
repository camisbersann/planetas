//Imports;
import { View, TextInput } from "react-native";
import styles from './styles';


const Inputs = ({ text, onChangeText, value}) => {
    return (
        <View>
            <TextInput style={styles.text} placeholder={text} onChangeText={onChangeText} value={value}/>
            </View>
    )
}
export default Inputs;