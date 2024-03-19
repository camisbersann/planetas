import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Developer from "../screens/Developer";
import StackRoutes from "./stack.routes";
import { Planet } from "../data/Planet";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="edit"
            size={24}
            color={focused ? "#131313" : "#D6D6D6"}
          />
        ),
        tabBarLabel: "Perfil",
        tabBarActiveTintColor: "#131313",
        tabBarInactiveTintColor: "#D6D6D6",
      }}/>

      {Planet.map((category) => (
        <Tab.Screen key={category.id}
        name={"Planetas"}
        component={StackRoutes}
        initialParams={{ category }}
        />
      ))}

      <Tab.Screen name="Desenvolvedor" component={Developer}/>
    </Tab.Navigator>
  );
};

export default TabRoutes;