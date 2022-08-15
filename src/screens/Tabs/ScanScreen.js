import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import s from "../../styling/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";


const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    navigation.navigate("ScanInfoScreen", { barcode: data });
    
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={[s.container,s.justify_cent]}>
        <Text style={s.font_H1}>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={s.container}>
        <Text style={s.font_H1}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

 

  // Return the View
  return (
    <View style={s.container}>
      <View style={s.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600 }}
        />
      </View>

      {scanned && (
        <TouchableOpacity
        onPress={() => setScanned(false)}
        style={[s.button_2, s.magSpace_T]}>
          <Text style={s.font_P2}>Scan again?</Text>
          
          
          </TouchableOpacity>
      )}
    </View>
  );
};



export default ScanScreen;
