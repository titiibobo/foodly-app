import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from 'react-native';
import { RGBorange  } from "../styling/globalStyles";


const Lock = ({height, width}) => (
    <View style={styles.container}>

  <Svg height={height} width={width} viewBox="0 0 100 100">

    <Path
      d="m64.45 26.25.76 2.73 6.77-1.87-.76-2.73C67.48 10.86 53.45 2.91 39.94 6.65c-13.51 3.74-21.46 17.77-17.73 31.28l6.2 22.4 6.77-1.87-6.2-22.4c-2.7-9.78 3.05-19.93 12.83-22.63s19.93 3.04 22.64 12.82z" fill= "#737270"
     
    />
    <Path
      d="M86.18 91.55c0 1.51-1.22 2.73-2.73 2.73H16.54c-1.51 0-2.73-1.22-2.73-2.73V48.07c0-1.51 1.22-2.73 2.73-2.73h66.92c1.51 0 2.73 1.22 2.73 2.73v43.48z"
    
        fill= {RGBorange}
   
    />
    <Path
      d="M86.18 91.55V64.91C64.14 83.56 32.35 90.57 14.34 93.14c.5.68 1.29 1.13 2.2 1.13h66.92a2.71 2.71 0 0 0 2.72-2.72z"
   
        fill= "#fbb715"

    />
    <Path
      d="M55.98 62.44c0-3.3-2.68-5.98-5.98-5.98s-5.98 2.68-5.98 5.98c0 1.97.96 3.71 2.42 4.8l-1.9 13.52h10.92l-1.9-13.52a5.984 5.984 0 0 0 2.42-4.8z"
      
        fill= "#58595b"
    
    />
    <Path
      d="M16.46 50.5v9.36c.25-3.98 2.16-12.63 14.13-12.63H19.72c-1.79.01-3.26 1.48-3.26 3.27z"
      
        fill= "#ffdc54"
   
    />
    <Path
      d="M44.54 80.77s8.1-2.29 9.02-13.52l1.9 13.52H44.54z"
     
        fill= "#3d3b3e"
     
    />
  </Svg>
  </View>
)

const styles= StyleSheet.create({
    container:{
      marginBottom: 50,
      alignItems: 'center',
      justifyContent: 'center',  
    }
   
  })

export default Lock;
