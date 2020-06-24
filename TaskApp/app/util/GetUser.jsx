import { AsyncStorage } from 'react-native';

const GetUserId = async () => {
    let userId = '';
    try {
        userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
    return userId;
};

export default GetUserId;