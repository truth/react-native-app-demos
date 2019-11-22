import { Button, ThemeProvider,ButtonGroup } from 'react-native-elements';
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SocialIcon} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import { ListItem } from 'react-native-elements';

class MyButtons extends Component {
    constructor () {
      super()
      this.state = {
        selectedIndex: 2
      }
      this.updateIndex = this.updateIndex.bind(this)
    }
  
    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }
  
    render () {
      const buttons = ['Hello', 'World', 'Buttons']
      const { selectedIndex } = this.state
  
      return (
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 100}}
        />
      )
    }
}
export default MyButtons;
