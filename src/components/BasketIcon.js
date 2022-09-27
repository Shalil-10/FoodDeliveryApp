import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'

const BasketIcon = () => {
    const navigation = useNavigation()
    const basketItems = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)

    if(basketItems.length === 0 ) return null
    
    return (
        <View className="absolute bottom-0 w-full z-50">
            <TouchableOpacity  className=" bg-[#00CCBB] p-3 flex-row items-center space-x-1">
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{basketItems.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">₹{basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon