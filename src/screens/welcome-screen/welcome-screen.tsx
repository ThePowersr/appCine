import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ContentView from '../../components/content-view/content-view'
import CustomText from '../../components/custom-text/custom-text'

const WelcomeScreen = () => {
  return (
    <ContentView>
      <CustomText>Welcome to the app!</CustomText>
    </ContentView>
  )
}

export default WelcomeScreen
