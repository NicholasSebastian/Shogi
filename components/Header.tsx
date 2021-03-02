import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const MenuIcon = require('../assets/menu.png');
const SettingsIcon = require('../assets/settings.png');

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={e => console.log('Menu pressed')}>
        <Image source={MenuIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Shogi</Text>
      <TouchableOpacity onPress={e => console.log('Settings pressed')}>
        <Image source={SettingsIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#1c1c1a',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30
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
  }
});