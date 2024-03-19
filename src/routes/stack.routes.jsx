import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlanetsRegistered from "../screens/PlanetsRegistered";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlanetsRegistered" component={PlanetsRegistered} />
      <Stack.Screen name="Details" component={PlanetsRegistered} />
    </Stack.Navigator>
  );
};

export default StackRoutes;