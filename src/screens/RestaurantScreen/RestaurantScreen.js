import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    QuestionMarkCircleIcon,
    StarIcon,
} from 'react-native-heroicons/solid';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { urlFor } from '../../../sanity';
import MenuCategoryRow from './MenuCategoryRow';
import { selectRestaurantId, setRestaurant } from '../../features/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';
import BasketIcon from '../../components/BasketIcon';



const RestaurantScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()


    // const route = useRoute()
    // const title = route.params.title
    const { params: {
        id, imgUrl, name, rating, address, short_description, lng, lat, menuCategories
    } } = useRoute()

    useEffect(() => {
        dispatch(
            setRestaurant({ id, imgUrl, name, rating, address, short_description, lng, lat, menuCategories })
        )
    }, [])

    // const restaurantId = useSelector(selectRestaurantId)
    return (
        <SafeAreaView>
            {/* {console.log("id: " + id)}
            {console.log("restaurantId: " + restaurantId)} */}
            <ScrollView>
                {/* {console.log(menuCategories)} */}
                <View className="relative">
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className="w-full h-56 bg-gray-300 p-4"
                    />
                    <TouchableOpacity onPress={navigation.goBack} className="absolute top-4 left-5 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon size={20} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{name}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon color={'green'} opacity={0.5} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-gray-500'>{rating}</Text>{/*  - {genre} */}
                                </Text>
                            </View>

                            <View className='flex-row items-center space-x-1'>
                                <LocationMarkerIcon color={'gray'} opacity={0.4} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-gray-500'>
                                        Nearby - {address.substring(0, 30)}
                                    </Text>
                                </Text>
                            </View>
                        </View>

                        <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                    </View>

                    <TouchableOpacity className='flex-row  items-center space-x-2 p-4 border-y border-gray-300'>
                        <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
                        <Text className='pl-2 flex-1 text-md font-bold'>
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color={'#00ccbb'} />
                    </TouchableOpacity>

                </View>
                <View className="pb-[60px]">

                {/* DishRow */}
                {menuCategories.map((menuCategory) => (
                    //   console.log(dish)
                    <MenuCategoryRow
                        key={menuCategory._id}
                        id={menuCategory._id}
                        // restaurantId={id}
                        name={menuCategory.name}
                        dishes={menuCategory.dishes}
                    />
                ))}
                </View>
            </ScrollView>

            <BasketIcon />
        </SafeAreaView>
    )
}

export default RestaurantScreen