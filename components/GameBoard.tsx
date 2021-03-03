import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const DIMENSIONS = 9;

interface ISquareProps {
  x: number
  y: number
}

interface ISquareState {
  currentPiece: unknown
}

class Square extends Component<ISquareProps, ISquareState> {
  x: number;
  y: number;

  // PAN responder API for drag and drop.
  // https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0

  constructor(props: ISquareProps) {
    super(props);
    this.x = props.x;
    this.y = props.y;
  }

  render() {
    const isOdd = (int: number) => int % 2 === 1;
    const condition1 = !isOdd(this.y) && isOdd(this.x);
    const condition2 = isOdd(this.y) && !isOdd(this.x);
    const style = condition1 || condition2 ? styles.odd : styles.even;
    return (
      <View style={style} />
    );
  }
}

class GameBoard extends Component {
  grid: Array<Array<JSX.Element>>;

  constructor(props: {}) {
    super(props);

    // Construct grid.
    this.grid = [];
    for (let x = 0; x < DIMENSIONS; x++) {
      let row: Array<JSX.Element> = [];
      for (let y = 0; y < DIMENSIONS; y++) {
        row.push(<Square x={x} y={y} />);
      }
      this.grid.push(row);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.grid.map(square => square)}
      </View>
    );
  }
}

export default GameBoard;

const tileStyles = {
  width: screenWidth / DIMENSIONS,
  height: screenWidth / DIMENSIONS
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth,
    height: screenWidth,
  },
  odd: {
    backgroundColor: '#eeeed2',
    ...tileStyles
  },
  even: {
    backgroundColor: '#779756',
    ...tileStyles
  }
});