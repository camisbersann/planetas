import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Developer from "../screens/Developer";
import StackRoutes from "./stack.routes";
import { Planet } from "../data/Planet";
import Home from "../screens/Home";
import PlanetsRegistered from "../screens/PlanetsRegistered";
import Details from "../screens/Details";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{
  
        tabBarIcon: ({ focused }) => (
          <Feather
            name="clipboard"
            size={24}
            color={focused ? "#8A2BE2" : "#A9A9A9"}
          />
        ),
        tabBarLabel: "Registrar Planeta",
        tabBarActiveTintColor: "#8A2BE2",
        tabBarInactiveTintColor: "#A9A9A9",
      }}/>

      <Tab.Screen name="PlanetsRegistered" component={PlanetsRegistered} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="moon"
            size={24}
            color={focused ? "#8A2BE2" : "#A9A9A9"}
          />
        ),
        tabBarLabel: "Planetas",
        tabBarActiveTintColor: "#8A2BE2",
        tabBarInactiveTintColor: "#A9A9A9",
      }}/>

      <Tab.Screen name="Details" component={Details} 
      options={{
      tabBarItemStyle: {display: "none"}
      }}/>

    


      <Tab.Screen name="Desenvolvedor" component={Developer}
       options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="user"
            size={24}
            color={focused ? "#8A2BE2" : "#A9A9A9"}
          />
        ),
        tabBarLabel: "Desenvolvedor",
        tabBarActiveTintColor: "#8A2BE2",
        tabBarInactiveTintColor: "#A9A9A9",
      }}/>
    </Tab.Navigator>
  );
};

export default TabRoutes;