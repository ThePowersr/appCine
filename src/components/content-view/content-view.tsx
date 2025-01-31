import React from 'react'
import { View } from 'react-native';
import PropsContentView from './content-view.interface';
import styles from './content-view.styles';

const ContentView = ({ children, styleContainer, ...props }: PropsContentView) => {
  return (
    <View style={[styles.container, styleContainer]} {...props}>
      {children}
    </View>
  )
}

export default ContentView
