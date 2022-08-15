import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet} from 'react-native';


const Spinner = () => {
    return (
        <View style={styles.container}>
        <LottieView source={require('../lottie/loading.json')} 
        autoPlay loop
        style={{width: '50%'}}
            />
            </View>
    );
  };

  export default Spinner

  const styles= StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',  
    }
})