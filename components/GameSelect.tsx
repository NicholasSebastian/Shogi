import React, { FC } from 'react';
import { 
  StyleSheet, Text, View, Image, 
  TouchableHighlight, ImageSourcePropType, GestureResponderEvent 
} from 'react-native';

interface IGameSelectProps {
  image: ImageSourcePropType
  title: string
  text: string
  onPress: (e: GestureResponderEvent) => void
}

const GameSelect: FC<IGameSelectProps> = (props) => {
  const { image, title, text, onPress } = props;
  return (
    <TouchableHighlight onPress={onPress}
      style={styles.container} 
      underlayColor="#1c1c1a">
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={{ width: 260 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default GameSelect;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 10
  },
  content: {
    flexDirection: 'row',
    margin: 15
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  },
  text: {
    color: '#bcbab8',
    fontWeight: '500',
    marginTop: 10
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15
  }
});