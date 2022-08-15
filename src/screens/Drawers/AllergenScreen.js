
import React, { useContext, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import OpenFoodContext from "../../context/openfood/openfoodContext";
import Spinner from "../../components/Spinner";
import List from "../../components/List";
import { container } from "../../styling/globalStyles";

const AllergenScreen = () => {
  const openfoodContext = useContext(OpenFoodContext);
  const { allergens, loading, getAllergens } = openfoodContext;

  useEffect(() => {
    getAllergens();
}, []);

if (loading) return <Spinner />;



  return (
    <View style={styles.container}>
      <FlatList
        data={allergens}
        keyExtractor={item => item.id}
        renderItem={List}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch ={20}
        windowSize={10}
        updateCellsBatchingPeriod={100}
        initialNumToRender={2}
        removeClippedSubviews={true}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container,
});

export default AllergenScreen;
