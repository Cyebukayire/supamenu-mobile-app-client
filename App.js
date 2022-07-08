import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './screens/auth/Signin';
import SignupScreen from './screens/auth/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/search/Search';
import SearchResultsScreen from './screens/search/SearchResults';
const Stack = createNativeStackNavigator();
import Notifs from './screens/tryOuts/Notifs';
import Refresh from './screens/tryOuts/Refresh';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
        name = "TryOut"
        component={Refresh}
        optoins = {{headerShown: false}}
        /> */}
      {/* <Stack.Screen
            name = "SignupScreen"
            component = {SignupScreen}
            options = {{headerShown: false}}
        />
        <Stack.Screen
          name= "SigninScreen"
          component = {SigninScreen}
          options = {{headerShown: false}}
        /> */}
        {/* <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options = {{headerShown: false}}
        /> */}
        <Stack.Screen
        name = "SearchResultsScreen"
        component ={SearchResultsScreen}
        options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
