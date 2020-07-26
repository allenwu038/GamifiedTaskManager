import { AsyncStorage } from 'react-native';

const SaveXp = async (xp) => {
    try {
      // console.log("xp type in SaveXp: " + typeof(xp));
      await AsyncStorage.setItem('@xp', xp);
      //alert("xp successfully saved:" + Number.parseInt(xp));
      console.log(xp);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
};

export default SaveXp;