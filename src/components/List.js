import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { container_2, font_H1, font_P3, box, magSpace_TB } from "../styling/globalStyles";

// Issue: API query not rendering
const List = ({ item }) => {
  return (
    <View style={styles.container_2}>
      <View style={styles.magSpace_TB}>
        {/* <Text style={styles.font_H1}>{item.id}</Text> */}
        <View style={styles.box}>
          <Text style={styles.font_P3}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_2,
  font_H1,
  font_P3,
  box,
  magSpace_TB
});

export default List;
