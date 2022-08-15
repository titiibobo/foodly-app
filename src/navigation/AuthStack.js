import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../screens/Stacks/OnboardingScreen";
import LoginScreen from "../screens/Stacks/LoginScreen";
import RegisterScreen from "../screens/Stacks/RegisterScreen";
import ForgotPasswordScreen from "../screens/Stacks/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Onboarding"
          options={
            {
              // headermode: none
            }
          }
          component={OnboardingScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    
  );
};

export default AuthStack;
