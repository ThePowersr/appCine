import React from 'react'
import { Text, View } from 'react-native'
import { PropsCustomText } from './custom-text.interface'
import styles from './custom-text.styles'

const CustomText = ({ children }: PropsCustomText) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

export default CustomText
