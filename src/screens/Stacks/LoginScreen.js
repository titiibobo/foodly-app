import React, { useContext, useState } from "react";
import {  View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../../styling/globalStyles";
import InputField from "../../components/InputField";
import authContext from "../../context/auth/authContext";
// import KeyboardAvoid from "../../components/KeyboardAvoid";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const AuthContext = useContext(authContext);
  const { login } = AuthContext;

  return (
    <SafeAreaView style={s.container}>
      <View style={[s.container, s.justify_cent]}>
        <InputField
          label={"Email ID"}
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
          // rules ={{required: true}}
        />

        <InputField
          label={"Password"}
          inputType="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          // rules ={{required: true}}
        />

        <TouchableOpacity 
        style={s.magSpace_TB}
        onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={s.font_P1}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            login(email, password);
          }}
          style={[s.button, s.magSpace_TB]}
        >
          <Text style={s.font_H2}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.magSpace_TB_X}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={s.font_P3}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
