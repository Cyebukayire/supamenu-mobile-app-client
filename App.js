import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './screens/auth/Signin';
import SignupScreen from './screens/auth/Signup';

export default function App() {
  return (
      // <SigninScreen/>
      <SignupScreen/>
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
