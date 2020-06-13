// REACT RESOURCE IMPORTS
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

// LOCAL SCREEN IMPORTS
import useCachedResources from './app/hooks/useCachedResources';
import BottomTabNavigator from './app/navigation/BottomTabNavigator';
import LoginScreen from './app/screens/LoginScreen';
import MakeProfile from './app/screens/MakeProfile';
import LinkingConfiguration from './app/navigation/LinkingConfiguration';
import TaskScreen from './app/screens/TaskScreen';


export default function App() {
  const Stack = createStackNavigator();
  const isLoadingComplete = useCachedResources();
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Nav" component={BottomTabNavigator} />
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MakeProfile" component={MakeProfile} /> */}
            <Stack.Screen name="Tasks" component={TaskScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
