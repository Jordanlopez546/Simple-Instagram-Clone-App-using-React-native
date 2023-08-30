import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'

function InstagramHeader(props) {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>JayStagram</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Feather style={styles.icon} color={'#E0E0E0'} name='heart' size={28}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name='message-circle' color={'#E0E0E0'} size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '7%',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 10, 
    },
    nameContainer: {
        marginHorizontal: 15
    },
    name: {
        color: '#E0E0E0',
        fontSize: 27, 
        fontWeight: 'bold',
    },
    iconContainer: {
        marginHorizontal: 15, 
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 20, 
    }
})

export default InstagramHeader;