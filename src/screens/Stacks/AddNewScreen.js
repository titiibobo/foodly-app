import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import s from '../../styling/globalStyles';
import InputField from '../../components/InputField';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import Success from '../../components/Success';

const AddNewScreen = () => {
  const [code, setCode] = useState(null);
  const [brand, setBrand] = useState(null);
  const [label, setLabel] = useState(null);
  const [status, setStatus] = useState(false);
  const [IsModalVisible, setIsModalVisible] = useState(false);

  // Add a new document in collection "cities"
  const create = async () => {
    await addDoc(collection(db, 'products'), {
      code: code,
      brand: brand,
      label: label,
    });
  };
  const resetValue = () => {
    setCode(null), setBrand(null), setLabel(null);
  };

  const handleSend = () => {
    if (create) {
      setStatus(true);
      create();
      setIsModalVisible(true);
      resetValue();
      setTimeout(() => {
        setIsModalVisible(false);  
      }, 5000);
    } else {
      alert('Something went wrong');
    }
  };

  return (
    
    <View style={s.container}>
      <View style={[s.magSpace_T, s.align_cent, s.container]}>
        <InputField
          label={'Code'}
          keyboardType='numeric'
          value={code}
          onChangeText={(code) => setCode(code)}
        />

        <InputField
          label={'Brand'}
          keyboardType='default'
          value={brand}
          onChangeText={(brand) => setBrand(brand)}
        />

        <InputField
          label={'Label'}
          keyboardType='default'
          value={label}
          onChangeText={(label) => setLabel(label)}
        />
        <Modal
        animationType="fade"
        transparent={true}
        visible={IsModalVisible}
        >
          <View style={s.container}>
      <Success msg= 'Product Added'/>
      </View>
        </Modal>

        <TouchableOpacity style={s.button_2} onPress={handleSend}>
          <Text style={s.font_H2}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default AddNewScreen;
