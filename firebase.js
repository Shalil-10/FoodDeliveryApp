import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDPhniMr2AcfnIfEc6j7A2qCHbYexkTI2A",
  authDomain: "fooddeliveryapp-ab25e.firebaseapp.com",
  projectId: "fooddeliveryapp-ab25e",
  storageBucket: "fooddeliveryapp-ab25e.appspot.com",
  messagingSenderId: "608841223989",
  appId: "1:608841223989:web:101e04decbc25de501c67c"
};

let app 
let auth

if(getApps().length === 0){
  app = initializeApp(firebaseConfig)
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })
}else{
  app = getApp()
  auth = getAuth()
}

// const db = getFirestore(app);

export { auth }
