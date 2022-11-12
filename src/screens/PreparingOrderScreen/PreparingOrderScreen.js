import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate("Delivery")
    }, 4000)
  }, [])
  
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">

      <Animatable.Image
        source={require("../../../assets/giphy.gif")}
        animation="slideInUp"
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="pulse"
        iterationCount={'infinite'}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to accept the order
      </Animatable.Text>

      {/* <Progress.Circle size={60} indeterminate={true} color="white"/> */}
      <Progress.CircleSnail size={70} thickness={4} color={['red', 'green', 'blue', 'black', 'white']} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen