import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Counter extends Component {
  state = {count: 1 , varCount: 0}
  componentDidMount() {
    const myId = this.props.id;
      setInterval(() => {
        if(this.state.varCount%4==myId){
        this.setState({count: this.state.varCount+1})
      }
    }, 10);
    setInterval(() => {
      this.setState({varCount: this.state.varCount+1})
    }, 1000);
  }

  render() {
    const count = this.state.count;
    const color = this.props.color;
    const size = this.props.size;


    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

class testProj3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter id = {0} color={'lightblue'} size={16} />
        <Counter id = {1} color={'skyblue'} size={32} />
        <Counter id = {2} color={'steelblue'} size={80} />
        <Counter id = {3} color={'darkblue'} size={140} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('testProj3', () => testProj3)
