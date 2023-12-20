import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ text, onDelete }) => { 
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={onDelete}>
                    <View style={styles.square}></View>
                </TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FEE6FE',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        flex: 1,
    },
});

export default Task;