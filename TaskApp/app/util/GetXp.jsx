import { AsyncStorage } from 'react-native';

const GetXp = async () => {
    let xp;
    try {
        xp = await AsyncStorage.getItem('@xp');
        console.log(xp);
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
    return xp;
};

export default GetXp;