import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Character: "character",
        Quests: "quests",
        Settings: "settings",
        Tasks: "tasks",
      },
    },
  },
};
