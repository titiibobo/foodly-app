import { StyleSheet, View, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);

  return (
    // For ios developement, wrap in SafeAreaView (all screens)
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc6516',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
