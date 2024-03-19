//Imports;
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import Title from '../Title/index';
import { TouchableOpacity, View} from "react-native";

const TouchableButton = ({ route, title, data}) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(route, { data })}>
                <Title title={title}/>
            </TouchableOpacity>
        </View>
    )
}
export default TouchableButton;