import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlanetsRegistered from "../screens/PlanetsRegistered";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

const StackRoutes = ({ route }) => {
  const { category } = route.params;

  return (
    <Stack.Navigator screenOptions={{ headerShow: false }}>
      <Stack.Screen name="Planetas Registrados" component={PlanetsRegistered} initialParams= {{ category }}/>
      <Stack.Screen name="Detalhes dos Planetas" component={Details} />
    </Stack.Navigator>
  );
};

export default StackRoutes;