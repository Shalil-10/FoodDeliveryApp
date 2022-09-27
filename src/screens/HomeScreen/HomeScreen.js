import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { client } from '../../../sanity'
import FeaturedRestaurantRow from './FeaturedRestaurantRow'
import FoodCategories from './FoodCategories'


import Header from './Header'

const HomeScreen = () => {

  const [featuredRestaurants, setFeaturedRestaurants] = useState([])

  useEffect(() =>{
    client.fetch(
      `
      *[_type=="featuredRestaurants"]
      `
    ).then((data) => setFeaturedRestaurants(data))
  },[])

  return (
    <SafeAreaView>
      {/* Header */}
      <Header />

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 130,
        }}
      >
        {/* Food Categories */}
        <FoodCategories/>

        {/* Featured Restaurant*/}
        {featuredRestaurants?.map((restaurant)=>(
          <FeaturedRestaurantRow
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.title}
            description={restaurant.short_description}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen