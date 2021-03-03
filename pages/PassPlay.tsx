import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import GameBoard from '../components/GameBoard';

class PassPlay extends Component {
  render() {
    return (
      <View style={styles.body}>
        <GameBoard />
      </View>
    );
  }
}

export default PassPlay;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#312d2c',
    paddingTop: 100
  }
});