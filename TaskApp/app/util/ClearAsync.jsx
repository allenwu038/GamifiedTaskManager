import { AsyncStorage } from 'react-native';

const ClearAsync = async function() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data');
    }
}

export default ClearAsync;