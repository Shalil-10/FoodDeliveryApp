import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/solid'
import DishRow from './DishRow'

const MenuCategoryRow = ({ id, name, dishes }) => {
    const [isPressed, setIsPressed] = useState(true)
    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className=' flex-row items-center p-4'
            >
                {/* {console.log(dishes)} */}

                <Text className=' font-bold flex-1'>{name}</Text>

                {isPressed ? (
                    <ChevronUpIcon color={'black'} />
                ) : (
                    <ChevronDownIcon color={'black'} />
                )}

            </TouchableOpacity>
            {isPressed && (
                <>
                    {dishes.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </>
            )}



        </>
    )
}

export default MenuCategoryRow