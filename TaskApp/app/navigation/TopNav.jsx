import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Progress from 'react-native-progress';

import CharacterScreen from "../screens/CharacterScreen";
import SettingsScreen from "../screens/SettingsScreen";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function TopNav({navigation}) {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.characterIcon}>
        <MaterialIcon
          name='person-outline'
          type='material-icons'
          color={Colors.navInactive}
          size={40}
          onPress={() => navigation.navigate('CharacterScreen')} />
      </View>

      <View style = {styles.progressBar}>
        <Progress.Bar 
          progress={0.3}
          width={200}
          color={Colors.navActive}
        />
      </View>

      <View style = {styles.settingsIcon}>
        <MaterialIcon
          name='settings'
          type='material-icons'
          color={Colors.navInactive}
          size={32}
          onPress={() => navigation.navigate('SettingsScreen')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  characterIcon: {
    justifyContent: 'center',
  },
  progressBar: {
    justifyContent: 'center',
  },
  settingsIcon: {
    justifyContent: 'center',
  },
});