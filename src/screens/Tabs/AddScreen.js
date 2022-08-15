import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import s from '../../styling/globalStyles';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import Spinner from '../../components/Spinner';

const AddScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    let result = [];
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });

    setUsers([...result]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderItem = ({ item }) => {
    return (
     
        <View style={s.box5}>
          <View style={s.align_start}>
            <Text style={s.font_P3}>{`${item.code}`}</Text>
            <Text style={s.font_P1}>{`${item.brand}`}</Text>
          </View>
        </View>
      
    );
  };

  const renderLoader = () => {
    return isLoading ? <Spinner /> : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

 

  const onRefresh = () => {
    setIsLoading(false);
    getUsers();
  };

  return (
    <View style={s.container}>
      
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          maxToRenderPerBatch={3}
          onRefresh={onRefresh}
          refreshing={isLoading}
        />
     
    </View>
  );
};


export default AddScreen;
