import React from "react";
import { ScrollView} from "react-native";
import Banner from "../../components/Banner";
import ProjectImg from "../../assets/images/projectImg.png";
import ProjectImg2 from "../../assets/images/projectImg2.png";
import ProjectImg3 from "../../assets/images/pancake.png";
import ProjectImg4 from "../../assets/images/veg.png";
import s from "../../styling/globalStyles";

const HomeScreen = () => {
  return (
    <ScrollView
      style={s.containerScroll}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Banner
        image={ProjectImg}
        text="Cornflakes is the world’s most famous breakfast cereal today."
      />
      <Banner
        image={ProjectImg2}
        text="McDonald’s cooked their fries in 93% beef fat (tallow) until 1990, 
        when they switched to vegetable oil."
      />
      <Banner
        image={ProjectImg3}
        text="The world’s most expensive pancake is available for $200.00 at Opus 
        in the Printworks in England. Ingredients include Madagascan vanilla 
        pods and 23-carat gold leaf"
      />
      <Banner
        image={ProjectImg4}
        text="Cucumbers are filled with amazing vitamins and minerals 
        including Vitamins B1, B2, B3, B5 and B6, Vitamin C, calcium, iron, magnesium,
         potassium, zinc and even folic acid. Phew, that’s a lot!"
      />
    </ScrollView>
  );
};


export default HomeScreen;
