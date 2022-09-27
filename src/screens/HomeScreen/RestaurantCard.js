import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../../../sanity'


const RestaurantCard = ({ id, imgUrl, name, rating, address, short_description, lng, lat, menuCategories}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Restaurant", { id, imgUrl, name, rating, address, short_description, lng, lat, menuCategories })
            }}
            className="bg-white mr-3 shadow">
            <Image
                source={{ uri: urlFor(imgUrl).url() }} //to show image while deployed on sanity backend
                className="h-40 w-55 rounded-sm"
            />
            {/* {console.log(menu)} */}
            <View className="px-3 pb-3">
                <View className="flex-row pt-2">
                    <Text className="font-bold text-lg flex-1">{name}</Text>
                    <View className="flex-row space-x-1 items-center">
                        <StarIcon color="green" opacity={0.5} size={22} />
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text>
                        </Text>
                    </View>
                </View>

                <View className="flex-row items-center space-x-1 pt-1">
                    <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500">Nearby - {address.substring(0, 20)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard