//Imports;
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import Title from '../Title/index';
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { TouchableOpacity } from "react-native";

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