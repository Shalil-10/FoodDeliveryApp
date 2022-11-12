import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    name: null,
    rating: null,
    address: null,
    short_description: null,
    dishes: null
  }
}

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const restaurantReducer = restaurantSlice.reducer

export const selectRestaurant = (state) => state.restaurant.restaurant    //1 restaurant -> name of store, 2 restaurant -> name of Object

export const selectRestaurantId = (state) => state.restaurant.restaurant.id    
