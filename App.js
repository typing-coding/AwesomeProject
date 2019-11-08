import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import FirstPropsScreen from './screens/FirstPropsScreen';
import LotsOfGreetings from './screens/SecondPropsScreen';

import FirstStateScreen from './screens/FirstStateScreen';
import LotsOfStyles from './screens/StyleScreen';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <FirstPropsScreen />
        <LotsOfGreetings />
        <FirstStateScreen />
        <LotsOfStyles />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;