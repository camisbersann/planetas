import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlanetsRegistered from "../screens/PlanetsRegistered";
import Home from "../screens/Home";
import Developer from "../screens/Developer";


const Stack = createNativeStackNavigator();

const StackRoutes = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Planetas Registrados" component={PlanetsRegistered}/>
        <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Desenvolvedor" component={Developer} />
    </Stack.Navigator>
  );
};

export default StackRoutes;