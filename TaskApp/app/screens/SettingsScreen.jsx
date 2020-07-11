import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Alert, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import UserSetting from "../components/Settings/UserSetting";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Icon
          name="chevron-double-left"
          style={styles.iconView}
          size={40}
          color="grey"
          onPress={() => navigation.goBack()}
        />
      </SafeAreaView>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <UserSetting onUIDChange={() => handleUIDChange()} />
      </ScrollView>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};

function handleUIDChange() {
  return Alert.alert("Change username", "Input your new username", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      // style: 'cancel'
    },
    {
      text: "Save",
      onPress: () => console.log("Install Pressed"),
    },
  ]);
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
