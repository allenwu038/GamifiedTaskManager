import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image,
  Button
} from 'react-native';
import backgroundImg from '../assets/images/homescreenBackground.jpg';
import logo from '../assets/images/blackbox.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MakeProfile from './MakeProfile';



const Stack = createStackNavigator();


export default function LoginScreen({ navigation }) {
    return ( 
      <ImageBackground source={backgroundImg} style={styles.backgroundContainer}>
        <Image source={logo} style={styles.logo} />
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('MakeProfile')}
        />
      </ImageBackground>
    )
  };

// function MyStack() {
//     return (
//         <Stack.Navigator>
//           <Stack.Screen
//             name="LoginScreen"
//             component={LoginScreen}
//             options={{ title: 'Welcome' }}
//           />
//           <Stack.Screen name="MakeProfile" component={MakeProfile} />
//         </Stack.Navigator>
//     );
// }


const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  logo: {
    width: 140,
    height: 140,
    padding: 40,
  }
})