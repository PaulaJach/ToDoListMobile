import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/ToDoContext';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const { state, deleteToDo } = useContext(Context);

    const navigation = useNavigation();

    

    return <View>
        <Text>Home Screen</Text>
        <FlatList 
        data={state}
        keyExtractor={(toDo) => toDo.title}
        renderItem={({ item }) => {
            return <TouchableOpacity onPress={() => navigation.navigate('ToDoItem', {id: item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - id: {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteToDo(item.id)}>
                        <FontAwesome name="trash" style={styles.trashIcon}/>
                    </TouchableOpacity>  
                </View>
            </TouchableOpacity>
            
        }}
        />
    </View>
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        color: 'gray'
    },
    title: {
        fontSize: 18
    },
    trashIcon: {
        fontSize: 20,
        color: '#888000'
    }
});

export default HomeScreen;