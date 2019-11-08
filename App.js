import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Text>Hello React Native</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;