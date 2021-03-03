import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import GameBoard from '../components/GameBoard';

class VsComputer extends Component {
  render() {
    return (
      <View style={styles.body}>
        <GameBoard />
      </View>
    );
  }
}

export default VsComputer;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#312d2c',
    paddingTop: 100
  }
});