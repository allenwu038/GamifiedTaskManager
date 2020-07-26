import { AsyncStorage } from 'react-native';

const SaveXp = async xp => {
    try {
      await AsyncStorage.setItem('xp', xp);
      alert("xp successfully saved:" + xp.toString());
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
};

export default SaveXp;