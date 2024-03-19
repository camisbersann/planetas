//Imports;
import { View, TextInput } from "react-native";
import styles from './styles';


const Inputs = ({ text, onChangeText, value, keyBoard}) => {
    return (
        <View style={styles.inputGroup}>
            <TextInput style={styles.text} placeholder={text} onChangeText={onChangeText} value={value} keyboardType={keyBoard}/>
            </View>
    )
}
export default Inputs;
