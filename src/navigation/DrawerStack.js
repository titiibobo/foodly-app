import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from './TabStack';
// Drawer imports
import ProfileScreen from '../screens/Drawers/ProfileScreen';
import AllergenScreen from '../screens/Drawers/AllergenScreen';
import AdditiveScreen from '../screens/Drawers/AdditiveScreen';
import { RGBwhite, RGBblack, RGBorange} from '../styling/globalStyles'



const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator 
        drawerContent= {props => <ProfileScreen {...props} /> }
        screenOptions={{
          // headerShown: false,
          drawerActiveBackgroundColor: RGBorange,
          drawerActiveTintColor: RGBwhite,
          drawerInactiveTintColor: RGBblack,
          drawerLabelStyle: {
            // fontFamily: 'Roboto-Medium',
            fontSize: 15,
            
          },
        
        }}
        >
          <Drawer.Screen name="Dashboard" options={{drawerLabel: () => null, title: null,drawerIcon: () => null, drawerItemStyle: { height: 0 }, headerShown: false }}component={TabStack} />
          <Drawer.Screen name="Allergens" component={AllergenScreen} />
          <Drawer.Screen name="Additives" component={AdditiveScreen} />
          </Drawer.Navigator>
    );
  }
  
 