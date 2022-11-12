import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../../features/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../features/basketSlice'
import { useEffect } from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../../sanity';


const BasketScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    const restaurant = useSelector(selectRestaurant)
    const basketItems = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)

    useEffect(() => {
        const groupedItems = basketItems.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [basketItems])

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* {console.log(Object.keys(groupedItemsInBasket).length)} */}


            <View className="flex-1 bg-gray-100 overflow-hidden">

                <View
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,
                        elevation: 8,
                    }}
                    className="pb-7 pt-5 bg-white">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        {Object.keys(groupedItemsInBasket).length !== 0 && <Text className="text-center text-gray-400">{restaurant.name}</Text>}
                    </View>

                    <TouchableOpacity onPress={navigation.goBack}
                        className={`rounded-full bg-gray-100 absolute right-4 ${Object.keys(groupedItemsInBasket).length !== 0 ? 'top-5' : 'top-3'}`}
                    >
                        <XCircleIcon color="#00CCBB" size={50} />
                    </TouchableOpacity>
                </View>
                {Object.keys(groupedItemsInBasket).length === 0
                    ?
                    <View>
                        <Text className="text-center mt-36 text-2xl font-bold tracking-wider">Your Basket is empty :( </Text>
                    </View>
                    :
                    <>
                        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                            <Image
                                source={{
                                    uri: "https://links.papareact.com/wru"
                                }}
                                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                            />
                            <Text className="flex-1">Deliver in 50-75 min</Text>
                            <TouchableOpacity>
                                <Text className="text-[#00CCBB]">Change</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView className="divide-y divide-gray-200">
                            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                                <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-4">
                                    <Text className="text-[#00CCBB]">{items.length} x</Text>
                                    <Image
                                        source={{ uri: urlFor(items[0]?.image).url() }}
                                        className="h-12 w-12 rounded-full"
                                    />
                                    <Text className="flex-1">{items[0]?.name}</Text>

                                    <Text className="text-gray-600">₹{items[0]?.price * items.length}</Text>

                                    <TouchableOpacity>
                                        <Text
                                            className="text-[#00CCBB] text-xs"
                                            // onPress={Object.keys(groupedItemsInBasket).length === 1 && navigation.goBack  }
                                            onPress={() => dispatch(removeFromBasket({ id: key }))}
                                        >
                                            Remove
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>

                        <View className="p-4 bg-white mt-5 space-y-4">
                            <View className="flex-row justify-between">
                                <Text className="text-gray-400">Subtotal</Text>
                                <Text className="text-gray-400">₹{basketTotal}</Text>
                            </View>

                            <View className="flex-row justify-between">
                                <Text className="text-gray-400">Delivery Fee</Text>
                                <Text className="text-gray-400">₹50</Text>
                            </View>

                            <View className="flex-row justify-between">
                                <Text >Order Total</Text>
                                <Text className="font-extrabold">₹{basketTotal + 50}</Text>
                            </View>

                            <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4">
                                <Text
                                    className="text-center text-white text-lg font-bold"
                                    onPress={() => navigation.navigate("PreparingOrder")}
                                >Place Order</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        </SafeAreaView>

    )
}

export default BasketScreen