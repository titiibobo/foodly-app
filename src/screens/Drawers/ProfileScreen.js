import {useContext} from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { font_P1, font_H1, padSpace } from "../../styling/globalStyles";
import Profile from "../../assets/images/profileImg.png";
import authContext from "../../context/auth/authContext";

const ProfileScreen = (props) => {
  const AuthContext = useContext(authContext);
  const { user, logout } = AuthContext;
  return (
    <View style={styles.container}>
      {/* Top-section view */}
      <View style={styles.profilebg}>
        <Image style={styles.profileBox} source={Profile} />
        <Text style={[styles.font_P1, styles.padSpace]}>
          {user.email}
        </Text>
      </View>
      {/* Mid-Section view */}
      <DrawerContentScrollView style={{ backgroundColor: "#fff" }} {...props}>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Bottom-view */}
      <View style={{ backgroundColor: "white" }}>
        <TouchableOpacity
          onPress={logout}
          style={{ paddingVertical: 100 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Text style={styles.font_P1} onPress={() => logout()}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#DCB39C",
  },
  font_P1,
  font_H1,
  padSpace,
  profileBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  profilebg: {
    backgroundColor: "#DCB39C",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});

export default ProfileScreen;
