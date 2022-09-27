import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import visible from '../../../assets/visible.png';
import hidden from '../../../assets/hidden.png';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../../../firebase';



const SignUpScreen = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seePassword, setSeePassword] = useState(true);

    const SignUp = async () => {
        if(name, phoneNumber, email, password === ''){
            console.warn("Please complete the fields")
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            // navigation.navigate('Sign in')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView className="flex-1 justify-center mx-5">
            <View className="border border-gray-400 rounded p-3">
                <TextInput
                    placeholder="Name"
                    autoFocus
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>

            <View className="border border-gray-400 rounded mt-4 p-3 flex-row items-center">
                <Text>+91 </Text>
                <TextInput
                    className=""
                    placeholder="Phone Number"
                    keyboardType='number-pad'
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                />
            </View>

            <View className="border border-gray-400 rounded mt-4 p-3">
                <TextInput
                    placeholder="Email"
                    keyboardType='email-address'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View className="border border-gray-400 rounded mt-4 flex-row items-center p-3">
                <TextInput
                    className="flex-1"
                    placeholder="Password"
                    value={password}
                    secureTextEntry={seePassword}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                    onPress={() => setSeePassword(!seePassword)}>
                    <Image source={seePassword ? hidden : visible} className="w-8 h-6" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity className="rounded bg-[#00CCBB] items-center p-3 mt-8" onPress={SignUp}>
                <Text className="text-white font-semibold text-lg">Sign up</Text>
            </TouchableOpacity>
            <View className="flex-row items-center justify-center mt-3">
                <Text className="text-base text-gray-400">Already have an account?  </Text>
                <Text className="text-[#00CCBB] font-semibold text-lg" onPress={() => navigation.navigate("Sign in")}>Sign in</Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen