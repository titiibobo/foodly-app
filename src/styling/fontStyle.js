import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export const fontStyle = () => {
  let [fontsLoaded] = useFonts({
    LatoBlack:require('../assets/fonts/Lato-Black.ttf'),
    LatoBold:require('../assets/fonts/Lato-Bold.ttf'),
    LatoItalic:require('../assets/fonts/Lato-Italic.ttf'),
    LatoRegular:require('../assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
}
