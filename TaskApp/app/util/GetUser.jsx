import { AsyncStorage } from 'react-native';

const GetUserId = async () => {
    let userId = '';
    try {
        userId = await AsyncStorage.getItem('userId');
        alert("Hello " + userId);
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return userId;
};

export default GetUserId;