import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../../styling/globalStyles";
import InputField from "../../components/InputField";
import authContext from "../../context/auth/authContext";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const AuthContext = useContext(authContext);
  const { register } = AuthContext;

  return (
    <SafeAreaView style={s.container}>
      <View style={[s.container, s.justify_cent]}>
        <InputField
          label={"Email ID"}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={"Password"}
          inputType="password"
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <InputField
          label={"Confirm Password"}
          inputType="password"
          fieldButtonFunction={() => {}}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity
          onPress={() => {
            register(email, password);
          }}
          style={s.button}
        >
          <Text style={s.font_H2}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.magSpace_TB_X}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={s.font_P3}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;


