import { AsyncStorage } from 'react-native';

const GetLevel = async () => {
    let level = '';
    try {
        level = await AsyncStorage.getItem('level');
        console.log("getLevel returns", level);
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return level;
};

export default GetLevel;