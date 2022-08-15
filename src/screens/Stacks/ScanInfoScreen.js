import React, { useContext, useEffect} from 'react'
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import OpenFoodContext from '../../context/openfood/openfoodContext'
import s from '../../styling/globalStyles'
import Spinner from '../../components/Spinner'
import NotFound from '../../components/NotFound'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ITEM_STORAGE_KEY } from '../../../const'

const ScanInfoScreen = ({ route}) => {
  const openFoodContext = useContext(OpenFoodContext)
  const { searchItem, item, loading } = openFoodContext
  const { barcode } = route.params

  const storeData = async (barcode, product) => {
    if (!(barcode && product)) return;
    let Storage = JSON.parse(await AsyncStorage.getItem(ITEM_STORAGE_KEY))

    if (!Storage) Storage = []
    Storage.push({
      id: new Date().getTime(),
      barcode,
      product
    })
    await AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(Storage))
  }

  useEffect(() => {
    searchItem(barcode)
  }, [])

  useEffect(()=> {
    if(loading || !item) return;

    storeData(barcode, item)
  }, [item])

  if (loading) return <Spinner/>

  if (!item && !loading)
    return (
      <NotFound
        height='100'
        width='100'
        heading='Ooops!'
        subheading="Didn't find anything"
      />
    );

  return (
    // cannot call image     //
    <View style={s.container}>
      {item && (
        <>
          <View style={[s.magSpace_T, s.align_cent]}>
            <Image
              source={{ uri: item.image_url }}
              style={[s.image_Size, s.magSpace_TB]}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Barcode</Text>
                <Text style={s.font_P3}> {item.id}</Text>
              </View>

              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Product name</Text>
                <Text style={s.font_A1}>{item.product_name}</Text>
              </View>
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Brand</Text>
                <Text style={s.font_H1}>{item.brands}</Text>
              </View>
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Creator</Text>
                <Text style={s.font_H1}>{item.creator}</Text>
              </View>
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Nova group</Text>
                <View style={[s.RGBgreen, s.box2, s.align_cent, s.justify_cent]}>
                  <Text style={s.font_B}>{item.nova_group}</Text>
                </View>
              </View>
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Nutri score</Text>
                <View style={[s.RGBgreen, s.box3, s.align_cent, s.justify_cent]}>
                  <Text style={s.font_B}>{item.nutriscore_score}</Text>
                </View>
              </View>
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Nutri grade</Text>
                <View style={[s.RGBgreen, s.box4, s.align_cent, s.justify_cent]}>
                  <Text style={s.font_B}>{item.nutriscore_grade}</Text>
                </View>
              </View>
              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Nutrient levels</Text>
                <View style={s.font_H1}>
                  {Object.keys(item.nutrient_levels).map((nutrient) => (
                    <Text key={nutrient} style={s.font_H1}>
                      {nutrient}:{' '}
                      <Text style={s.font_A3}>
                        {item.nutrient_levels[nutrient]}
                      </Text>
                      <Text style={s.font_P1}> in quantity</Text>
                    </Text>
                  ))}
                </View>
              </View>
                  <View style={[s.border, s.magSpace]}>
                    <Text style={[s.font_P1, s.magSpace_TB]}>
                    This shows the nutrient levels of this item.
                    </Text>
                  </View>
                  
                  <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Ingredients</Text>
              <View style={s.font_H1}>
                  {Object.keys(item.nutriments).map((nutriment) => (
                    <Text key={nutriment} style={s.font_H1}>
                      {nutriment}:{' '}
                      <Text style={s.font_A3}>
                        {item.nutriments[nutriment]}
                      </Text>
                    </Text>
                  ))}
                  </View>
                  </View>
                  <View style={[s.border, s.magSpace]}>
                    <Text style={[s.font_P1, s.magSpace_TB]}>
                      This shows the nutritional ingredients of this item in unit, gram, or value.
                    </Text>
              </View>

              <View style={[s.magSpace_TB, s.box, s.padSpace]}>
                <Text style={s.font_P1}> Data source</Text>
                <Text style={s.font_P1}>{item.data_sources}</Text>
              </View>
            </ScrollView>
            
          </View>
        </>
      )}
    </View>
  );
};



export default ScanInfoScreen;
