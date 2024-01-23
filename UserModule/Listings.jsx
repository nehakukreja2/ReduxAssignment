import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import UserListItem from './UserListItem';

const Listings = ({navigation}) => {
  const users = useSelector(store => store.users);
  console.log('users', users);

  const clickAddButton = () => {
    navigation.navigate('UserDetailsForm');
  };

  const handleEmpty = () => {
    return (
      <View style={styles.containterView}>
        <Text style={styles.noRecord}> No Record Found</Text>
        <TouchableOpacity style={styles.addButton} onPress={clickAddButton}>
          <Text style={styles.addButtonText}> Add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ListEmptyComponent={handleEmpty}
        data={users}
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
        renderItem={({item, index}) => (
          <UserListItem item={item} index={index} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  containterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 15,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  noRecord: {
    fontSize: 20,
    color: 'black',
  },
});
