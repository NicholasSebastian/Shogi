import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

const MenuIcon = require('../assets/menu.png');

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={e => console.log('Menu pressed')}>
          <Image source={MenuIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Shogi</Text>
        <TouchableOpacity onPress={e => console.log('Log In pressed')}>
          <Text style={styles.button}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#1c1c1a',
    justifyContent: 'flex-end'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 25
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#bcbab8'
  },
  button: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500'
  }
});