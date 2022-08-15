import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Stack Screens
import ScanInfoScreen from "../screens/Stacks/ScanInfoScreen";
import AddNewScreen from "../screens/Stacks/AddNewScreen";
import DrawerStack from "../navigation/DrawerStack";
import OpenFoodState from "../context/openfood/OpenFoodState";
import { StyleSheet} from 'react-native';
import { button_3, font_P2} from '../styling/globalStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  
  return (
    <OpenFoodState>
      
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerStack"
            options={{ headerShown: false }}
            component={DrawerStack}
          />
          <Stack.Screen
            name="ScanInfoScreen"
            component={ScanInfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNewScreen"
            component={AddNewScreen}
            options={{ 
              title: 'Back', 
              
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons
                  name="arrow_back_ios"
                  size={size}
                  color={color}
                /> 
                ),
              
            
            }}
          />
        </Stack.Navigator>
      
    </OpenFoodState>
  );
};


export default AppStack;

const styles = StyleSheet.create({
  button_3,
  font_P2
});