import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

import { client } from '../../../sanity'
import RestaurantCard from './RestaurantCard'


const FeaturedRestaurantRow = ({ id, title, description }) => {
    
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        client.fetch(`
          *[_type == "featuredRestaurants" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              restaurantMenuCategory[]->{
                ...,
                dishes[]->
              }
            }
          }[0]
        `, { id }).then(data => setRestaurants(data?.restaurants))
    }, [])

    return (
        <View>
            <View className="flex-row mt-4 items-center justify-between mx-3">
                
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 mx-3">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                {/* Restaurant Cards */}
                {/* {console.log(restaurants)} */}
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        name={restaurant.name}
                        rating={restaurant.rating}
                        // menu={restaurant.restaurantMenuCategory?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        // dishes={restaurant.restaurantMenuCategory?.dishes}
                        lng={restaurant.lng}
                        lat={restaurant.lat}
                        menuCategories={restaurant.restaurantMenuCategory}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRestaurantRow