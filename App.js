import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigation from './components/AppNavigation';
import StatusBar from './components/StatusBar';
import { Container } from 'native-base';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
        <AppNavigation />
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
