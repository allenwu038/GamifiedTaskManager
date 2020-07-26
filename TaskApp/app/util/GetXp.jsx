import { AsyncStorage } from 'react-native';

const GetXp = async () => {
    let xp = 0;
    try {
        xp = await AsyncStorage.getItem('xp');
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return xp;
};

export default GetXp;