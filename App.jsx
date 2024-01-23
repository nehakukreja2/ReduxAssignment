/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Listings from './UserModule/Listings';
import UserDetailsForm from './UserModule/UserDetailsForm';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './UserModule/UserStore';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Listing"
            component={Listings}
            options={({navigation}) => ({
              headerTitle: 'Listing',
              headerRight: () => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('UserDetailsForm');
                      }}
                      style={{
                        borderRadius: 17.5,
                        height: 35,
                        width: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e9ebfe',
                        marginRight: 8,
                      }}>
                      <Image
                        style={{
                          borderRadius: 10,
                          height: 20,
                          width: 20,
                          tintColor: '#6272eb',
                        }}
                        source={{
                          uri: 'https://cdn.icon-icons.com/icons2/834/PNG/512/plus_icon-icons.com_66718.png',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              },
            })}
          />
          <Stack.Screen name="UserDetailsForm" component={UserDetailsForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
