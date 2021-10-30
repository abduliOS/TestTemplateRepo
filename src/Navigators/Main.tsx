import React, { useState } from 'react'
import { Button, Alert } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/PresentationLayer/Containers'
import i18n from 'i18next'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const [title, setTitle] = useState('French')

  const setLanguage = () => {
    setTitle(title === 'English' ? 'French' : 'English')
    i18n.changeLanguage(title === 'English' ? 'en' : 'fr')
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={IndexExampleContainer}
        options={{
          headerRight: () => (
            <Button onPress={() => setLanguage()} title={title} color="#000" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
