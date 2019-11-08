import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import FirstPropsScreen from './screens/FirstPropsScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <FirstPropsScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;