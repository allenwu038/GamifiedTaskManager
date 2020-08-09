import { AsyncStorage } from 'react-native';

const SaveLevel = async level => {
    try {
      await AsyncStorage.setItem('level', level);
      console.log("saveLevel returns", level);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
};

export default SaveLevel;