import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/ToDoContext';

const EditButton = ({id}) => {
    const navigation = useNavigation();
    return <View>
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
            <Foundation name="pencil" style={styles.pencilIcon}/>
        </TouchableOpacity>
    </View>
        
};

const styles = StyleSheet.create({
    pencilIcon: {
        fontSize: 22,
        paddingRight: 10
    }
});

export default EditButton;