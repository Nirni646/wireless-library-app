import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/BookTransaction';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  Transaction : TransactionScreen,
  Search : SearchScreen
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

