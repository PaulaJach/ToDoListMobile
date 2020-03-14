import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/ToDoContext';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    const { state, addToDo } = useContext(Context);


    return <View>
        <Text>Home Screen</Text>
        <Button title="add toDo" onPress={addToDo}/>
        <FlatList 
        data={state}
        keyExtractor={(toDo) => toDo.title}
        renderItem={({ item}) => {
            return <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <FontAwesome name="trash" style={styles.trashIcon}/>
            </View>
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