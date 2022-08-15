import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  button,
  font_H2,
  font_P2,
  font_P1,
  font_P3,
  magSpace_TB,
  magSpace_TB_X,
  padSpace,
  container,
  justify_cent
} from '../../styling/globalStyles';
import InputField from '../../components/InputField';
import authContext from '../../context/auth/authContext';
import Lock from '../../components/Lock';
import Success from '../../components/Success';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const AuthContext = useContext(authContext);
  const { forgotpassword } = AuthContext;


  const handleSend = () => {
      forgotpassword(email);
      setIsModalVisible(true);
      resetValue();
      setTimeout(() => {
        setIsModalVisible(false);  
      }, 7000);
   
  };

  const resetValue = () => {
    setEmail(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[container, justify_cent]}>
        <Lock height='100' width='100' />
        <InputField
          label={'Email ID'}
          keyboardType='email-address'
          value={email}
          onChangeText={(email) => setEmail(email)}
          rules={{ required: true }}
        />
        <Text style={[font_P1, padSpace]}>
          Enter an email associated with your account and we will send an email
          with with instruction to reset your password
        </Text>
        <Modal
        animationType="fade"
        transparent={true}
        visible={IsModalVisible}
        >
          <View style={container}>
      <Success 
       msg= 'Email sent!'
       submsg= 'Please check your mail and follow the instructions'/>
      </View>
        </Modal>
        <TouchableOpacity
          onPress={handleSend}
          style={[styles.button, styles.magSpace_TB]}
        >
          <Text style={styles.font_H2}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.magSpace_TB_X}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.font_P3}>Go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container,
  button,
  font_H2,
  font_P2,
  font_P3,
  font_P1,
  magSpace_TB,
  magSpace_TB_X,
  padSpace,
  
});
