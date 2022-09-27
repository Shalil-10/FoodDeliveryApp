import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SignInScreen from '../screens/AuthScreens/SignInScreen'
import SignUpScreen from '../screens/AuthScreens/SignUpScreen'
import { useAuthentication } from '../utils/hooks/useAuthentication'
import { ActivityIndicator } from 'react-native'
import UserInfoScreen from '../screens/UserInfoScreen/UserInfoScreen'
import RestaurantScreen from '../screens/RestaurantScreen/RestaurantScreen'

const Stack = createStackNavigator()

const Navigation = () => {
  const { user, loading } = useAuthentication()

  if (loading) {
    return <ActivityIndicator className="justify-center" size={"large"} color="gray" />
  }
  return (
    <Stack.Navigator>
      {
        user ?
          (
            <Stack.Group 
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name='Home' component={HomeScreen} />
              <Stack.Screen name='UserInfo' component={UserInfoScreen} 
                options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
              />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />

            </Stack.Group>
          ) : (
            <Stack.Group
              screenOptions={{
                headerStyle: { backgroundColor: "#00CCBB" },
                headerTintColor: "white",
                headerTitleAlign: "center"
              }}
            >
              <Stack.Screen name='Sign in' component={SignInScreen} />
              <Stack.Screen name='Sign up' component={SignUpScreen} />
            </Stack.Group>
          )
      }
    </Stack.Navigator>
  )

  // return (
  //   <Stack.Navigator>


  //     <Stack.Group screenOptions={{headerShown:false}}>
  //       <Stack.Screen name='Home' component={HomeScreen} />
  //     </Stack.Group>

  //     <Stack.Group
  //       screenOptions={{
  //         headerStyle: { backgroundColor: "#00CCBB" },
  //         headerTintColor: "white",
  //         headerTitleAlign: "center"
  //       }}
  //     >
  //       <Stack.Screen name='Sign in' component={SignInScreen} />
  //       <Stack.Screen name='Sign up' component={SignUpScreen} />
  //     </Stack.Group>


  //   </Stack.Navigator>
  // )
}

export default Navigation