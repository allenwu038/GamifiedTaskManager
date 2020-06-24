import { AsyncStorage } from 'react-native';

const Storage = () => {
    const saveUserId = async userId => {
        try {
          await AsyncStorage.setItem('userId', userId);
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
    };
      
    const getUserId = async () => {
        let userId = '';
        try {
            userId = await AsyncStorage.getItem('userId') || 'none';
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return userId;
    };
};

export default Storage;