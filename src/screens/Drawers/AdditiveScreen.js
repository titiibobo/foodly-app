
import React, { useContext, useEffect } from "react";
import { StyleSheet, View, FlatList} from "react-native";
import OpenFoodContext from "../../context/openfood/openfoodContext";
import Spinner from "../../components/Spinner";
import List from "../../components/List";
import { container } from "../../styling/globalStyles";

const AdditiveScreen = () => {
  const openfoodContext = useContext(OpenFoodContext);
  const { additives, loading, getAdditives } = openfoodContext;

  useEffect(() => {
        getAdditives();
  }, []);

  if (loading) return <Spinner />;
  return (
    <View style={styles.container}>
       
      <FlatList
        data={additives}
        keyExtractor={item => item.id}
        renderItem={List}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container,
});

export default AdditiveScreen;
