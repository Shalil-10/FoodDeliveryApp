import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import visible from '../../../assets/visible.png';
import hidden from '../../../assets/hidden.png';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const SignInScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);

  const SignIn = async () => {
    if (email, password === '') {
      console.warn("Please complete the fields")
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SafeAreaView className="flex-1 justify-center mx-5">
      <View className="border border-gray-400 rounded p-3">
        <TextInput
          placeholder="Email"
          keyboardType='email-address'
          autoFocus
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

      <TouchableOpacity className="rounded bg-[#00CCBB] items-center p-3 mt-8" onPress={SignIn}>
        <Text className="text-white font-semibold text-lg">Sign in</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center mt-3">
        <Text className="text-base text-gray-400">Create an account?  </Text>
        <Text className="text-[#00CCBB] font-semibold text-lg" onPress={() => navigation.navigate("Sign up")}>Sign up</Text>
      </View>



    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});

export default SignInScreen