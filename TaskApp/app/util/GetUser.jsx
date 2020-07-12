import { AsyncStorage } from 'react-native';

const GetUserId = async () => {
    let userId = '';
    try {
        userId = await AsyncStorage.getItem('userId');
        alert("Hello " + userId);
        if(userId !== null) {
            // value previously stored
            // alert("Hello " + userId);
        }
        //userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return userId;
};

export default GetUserId;