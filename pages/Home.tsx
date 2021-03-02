import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { PageContext } from '../App';
import GameSelect from '../components/GameSelect';

const SingleplayerIcon = require('../assets/singleplayer.png');
const PassNPlayIcon = require('../assets/passnplay.png');
const MultiplayerIcon = require('../assets/multiplayer.png');
const RankedIcon = require('../assets/ranked.png');

const Home: FC = () => {
  const setPage = useContext(PageContext)!;
  return (
    <View style={styles.body}>
      <GameSelect image={SingleplayerIcon} 
        title="Play vs. Computer"
        text="Play against a CPU opponent."
        onPress={e => setPage('vsComp')} />
      <GameSelect image={PassNPlayIcon}
        title="Pass n' Play"
        text="Play 1v1 with the person next to you."
        onPress={e => setPage('passPlay')} />
      <GameSelect image={MultiplayerIcon} 
        title="Play Online"
        text="Play against players online."
        onPress={e => alert("Feature not available yet.")} />
      <GameSelect image={RankedIcon}
        title="Ranked Match"
        text="A serious game against online players."
        onPress={e => alert("Feature not available yet.")} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#312d2c',
    alignItems: 'center',
    paddingTop: 25
  }
});