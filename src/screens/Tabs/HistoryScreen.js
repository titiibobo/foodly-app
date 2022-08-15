import React, { useState, useEffect, useLayoutEffect } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NotFound from '../../components/NotFound'
import s from '../../styling/globalStyles'
import { ITEM_STORAGE_KEY } from '../../../const'

const HistoryScreen = ({navigation}) => {
  const [objects, setObjects] = useState([])
  
  const searchHistory = async () => {
    let Storage = JSON.parse(await AsyncStorage.getItem(ITEM_STORAGE_KEY))

    if (!Storage) Storage = []
    setObjects(Storage)
  }

  const clearAll = async () => {
    await AsyncStorage.clear()
    setObjects([])
    alert('Storage cleared!!')
  }

  useEffect(() => {
    searchHistory()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
      style={s.button_3}
      onPress={clearAll}>
        <Text style={s.font_H2}>Clear</Text>
      </TouchableOpacity>
    )
  });
  }, [navigation])
  
  return (
    <View style={s.container}>
      {objects.length ? (
        <FlatList
          data={objects}
          showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={[s.magSpace_TB, s.box5]}>
              <Text style={s.font_P3}> {item.id}</Text>
              <Text style={s.font_P1}>{item.product.product_name}</Text>
            </View>
          )}
        />
      ) : (
        <View style={[s.justify_cent, s.align_cent, s.flex]}>
          <NotFound height="100" width="100" subheading="Nothing to see here"/>
        </View>
      )}
    </View>
  )
}

export default HistoryScreen