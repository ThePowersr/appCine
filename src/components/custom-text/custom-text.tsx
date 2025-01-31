import React from 'react'
import { Text, View } from 'react-native'
import { PropsCustomText } from './custom-text.interface'
import styles from './custom-text.styles'

const CustomText = ({ children, styleContainer }: PropsCustomText) => {
  return (
    <Text style={[styles.text, styleContainer]}>{children}</Text>
  )
}

export default CustomText
