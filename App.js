import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Navigation';
import { store } from './store'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar backgroundColor={"#00CCBB"} barStyle="light-content" />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App
