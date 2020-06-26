import { AsyncStorage } from 'react-native';

const GetUserId = async () => {
    let userId = '';
    try {
        userId = await AsyncStorage.getItem('userId');
        // if(value !== null) {
        //     // value previously stored
        // }
        //userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return userId;
};

export default GetUserId;