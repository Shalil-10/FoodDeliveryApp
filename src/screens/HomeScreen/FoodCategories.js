import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../../sanity'
import FoodCategoriesCard from './FoodCategoriesCard'

const FoodCategories = () => {
  const [foodCategories, setFoodCategories] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type=="appMenuCategory"]`
    ).then(data => setFoodCategories(data))
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 12,
        paddingTop: 5
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Food Categories Card */}
      {foodCategories.map((foodCategory) => (
        <FoodCategoriesCard
          key={foodCategory._id}
          imgUrl={urlFor(foodCategory.image).url()}
          name={foodCategory.name}
        />
      ))}
    </ScrollView>
  )
}

export default FoodCategories