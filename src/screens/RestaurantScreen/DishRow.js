import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../../../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../../features/basketSlice'
import { useRoute } from '@react-navigation/native'


const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)

    const dispatch = useDispatch()
    // const basketItems = useSelector((state) => state.basket.basketItems.filter((item) => item.id === id))
    const basketItems = useSelector((state) => selectBasketItemsWithId(state, id))
   
    const { params: {
        id: restaurantId
    } } = useRoute()



    useEffect(()=>{
        if(basketItems.length !== 0){
            setIsPressed(true)
        }
    },[])

    const addDishToBasket = () =>{
        dispatch(addToBasket({ restaurantId ,id, name, description, price, image }))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
                // className='bg-white border p-4 border-gray-200'
            >
            
                

                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            ₹{price}
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{ uri: urlFor(image).url() }}
                            className="h-20 w-20 bg-gray-300"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className='bg-white flex-row items-center space-x-2 pb-3 px-3'>
                    <TouchableOpacity
                        disabled={!basketItems.length}
                        onPress={() => dispatch(removeFromBasket({ id }))}
                    >
                        <MinusCircleIcon
                            color={basketItems.length > 0 ? "#00CCBB" : "gray"}
                            size={40}
                        />
                    </TouchableOpacity>
                    <Text>{basketItems.length}</Text>

                    <TouchableOpacity
                        onPress={addDishToBasket}
                    >
                        <PlusCircleIcon
                            color="#00CCBB"
                            size={40}
                        />
                    </TouchableOpacity>
                </View> 
            )}
        </>
    )
}

export default DishRow