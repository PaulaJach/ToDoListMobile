import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const CreateButton = () => {
    const navigation = useNavigation();
    return <View>
        <TouchableOpacity onPress={() => navigation.navigate('CreateToDo')}>
            <AntDesign name="pluscircleo" style={styles.plusIcon}/>
        </TouchableOpacity>
        </View>
        
};

const styles = StyleSheet.create({
    plusIcon: {
        fontSize: 22,
        paddingRight: 10
    }
});

export default CreateButton;