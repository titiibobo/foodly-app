import { StyleSheet } from 'react-native'

// Variable
const RGB_orange = "#cc6516";
const RGB_lightorange = "#DCB39C";
const RGB_white = "#fff";
const RGB_black = "#71717A";
const RGB_lightblack = "#8D8D8D";
const RGB_lightgrey = "#EFEFEF";
const RGB_grey = "#E6E6E6";


//  Color Global export
export const RGBorange = "#cc6516";
export const RGBlightorange = "#DCB39C";
export const RGBblack = "#71717A";
export const RGBwhite = "#fff";
export const RGBlightblack = "#8D8D8D";
export const RGBlightgrey = "#E6E6E6";
export const RGBverylightgrey = "#F9F9F9";
export const RGBred = "#EE4547";
export const RGBgreen = "#6ba542";

export const container = {
  flex: 1,
  backgroundColor: RGB_white,
  alignItems: "center",
  // justifyContent: 'center',
  paddingLeft: 20,
  paddingRight: 20,
};
export const containerScroll = {
  flex: 1,
  backgroundColor: RGB_white,
  paddingLeft: 20,
  paddingRight: 20,
};
export const container_2 = {
  flex: 1,
  backgroundColor: RGB_white,
  paddingLeft: 5,
  paddingRight: 20,
};
export const box = {
  backgroundColor: RGBverylightgrey,
};

export const box2 = {
  width: 50,
  height: 50,
  backgroundColor: RGBgreen,
  marginLeft: 5,
};
export const box3 = {
  width: 150,
  height: 50,
  backgroundColor: RGBred,
  marginLeft: 5,
};
export const box4 = {
  width: 100,
  height: 50,
  backgroundColor: RGBorange,
  marginLeft: 5,
};
export const box5 = {
  flext: 1,
  backgroundColor: RGBlightgrey,
  borderRadius: 10,
  marginBottom: 10,
  paddingLeft: 30,
  paddingRight: 200,
//  padding:50,
 width: '100%',
  // paddingHorizontal: 100,
  paddingVertical: 20,
  

};
export const image_Size = {
  backgroundColor: RGB_lightgrey,
  height: 200,
  width: 350,
  marginBottom: 40,
  borderRadius: 34,
};

// Text
export const font_P0 = {
  fontSize: 14,
  // fontFamily: 'LatoRegular',
  color: RGB_lightblack,
  letterSpacing: 0.5,
};
export const font_P1 = {
  fontSize: 14,
  // fontFamily: 'LatoRegular',
  color: RGB_black,
};
export const font_P2 = {
  fontSize: 14,
  // fontFamily: 'LatoRegular',
  color: RGB_white,
};
export const font_P3 = {
  fontSize: 14,
  // fontFamily: 'LatoRegular',
  color: RGB_orange,
};
export const font_H1 = {
  fontSize: 18,
  // fontFamily: 'LatoBold',
  color: RGB_black,
};
export const font_H2 = {
  fontSize: 18,
  // fontFamily: 'LatoBold',
  color: RGB_white,
};
export const font_H3 = {
  fontSize: 18,
  // fontFamily: 'LatoBold',
  color: RGB_orange,
};
export const font_A1 = {
  fontSize: 22,
  // fontFamily: 'LatoBold',
  color: RGB_black,
};
export const font_A2 = {
  fontSize: 22,
  // fontFamily: 'LatoBold',
  color: RGB_white,
};
export const font_A3 = {
  fontSize: 22,
  // fontFamily: 'LatoBold',
  color: RGB_orange,
};
export const font_B = {
  fontSize: 28,
  // fontFamily: 'LatoBold',
  color: RGB_white,
};

// Button
export const button = {
  alignItems: "center",
  backgroundColor: RGB_orange,
  borderRadius: 10,
  paddingHorizontal: 100,
  paddingVertical: 15,
};
export const button_2 = {
  alignItems: "center",
  padding: 10,
  borderRadius: 10,
  paddingHorizontal: 100,
  paddingVertical: 15,
  marginTop: 50,
  backgroundColor: RGB_orange,
};
export const button_3 = {
  alignItems: "center",
  // padding: 10,
  borderRadius: 10,
  paddingHorizontal: 20,
  paddingVertical:5,
  marginRight: 20,
  backgroundColor: RGB_orange,
};

// Input
export const field = {
  flexDirection: "row",
  backgroundColor: RGB_lightgrey,
  padding: 10,
  marginBottom: 45,
  borderRadius: 10,
  paddingHorizontal: 40,
  marginHorizontal: -10,
  paddingVertical: 15,
  borderWidth: 1,
  borderColor: RGB_grey,
};

// Spacing
export const padSpace = {
  padding: 15,
};
export const padSpace_TB = {
  paddingTop: 15,
  paddingBottom: 15,
};
export const padSpace_LR = {
  paddingLeft: 15,
  paddingRight: 15,
};

export const magSpace = {
  margin: 20,
};
export const magSpace_TB = {
  marginTop: 10,
  marginBottom: 10,
};
export const magSpace_T = {
  marginTop: 60,
};
export const magSpace_B = {
  marginBottom: 60,
};
export const magSpace_TB_X = {
  marginTop: 80,
  marginBottom: 80,
};
export const magSpace_LR = {
  marginLeft: 20,
  marginRight: 20,
};
export const align_cent = {
  alignItems: "center",
};
export const align_start = {
  alignItems: "flex-start",
};
export const justify_cent = {
  justifyContent: "center",
};

export const border = {
  backgroundColor: RGB_lightorange,
  paddingLeft: 20,
  paddingRight: 20,
};

export const flex = {
  flex: 1
}

export const barcodebox = {
  alignItems: "center",
  justifyContent: "center",
  height: 500,
  width: 600,
  overflow: "hidden",
  borderRadius: 30,
}

const s = StyleSheet.create({
  container,
  container_2,
  containerScroll,
  image_Size,
  font_A1,
  font_A3,
  font_B,
  font_P1,
  font_P2,
  font_P3,
  font_H2,
  font_H1,
  button,
  button_2,
  button_3,
  padSpace,
  padSpace_TB,
  padSpace_LR,
  magSpace,
  magSpace_TB,
  magSpace_TB_X,
  magSpace_T,
  magSpace_B,
  magSpace_LR,
  box,
  box2,
  box3,
  box4,
  box5,
  flex,
  align_cent,
  justify_cent,
  border,
  field, 
  RGBgreen,
  RGB_orange,
  RGB_lightgrey,
  barcodebox
})

export default s;