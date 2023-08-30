import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

function Stories(props) {

    const DATA = [
        {
            image: require('../images/image.jpg'), 
            name: "Your Story",
        },
        {
            image: require('../images/aji.jpg'), 
            name: "jordan"
        },
        {
            image: require('../images/five.jpg'), 
            name: "chime"
        },
        {
            image: require('../images/one.jpg'), 
            name: "lopez"
        },
        {
            image: require('../images/two.jpg'), 
            name: "jiggy"
        },
        {
            image: require('../images/four.jpg'), 
            name: "programmer"
        },
        {
            image: require('../images/three.jpg'), 
            name: "lastborn"
        },
    ]

    const renderItem = ({item, index}) => {
        return (
            <View style={styles.storyContainer}>
                <TouchableOpacity>
                <View style={[styles.imageContainer, index===0 || index === 3 ? styles.coverUnFillContainer : {}]} >
                    <Image source={item.image} style={styles.image}/>
                    <View style={[index === 0 ? styles.plusContainer : styles.noplusContainer]}>
                        <Text style={[index === 0 ? styles.plus : styles.noplus]}>+</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList horizontal data={DATA} keyExtractor={(item, index)=>item+index} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '13.5%',
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: 6, 
        marginBottom: 3, 
    },
    storyContainer: {
        backgroundColor: 'black',
        width: 92, 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 2.2
    },
    imageContainer: {
        borderWidth: 4, 
        borderRadius: 35, 
        borderColor: 'tomato'
    },
    image: {
        width: 70, 
        height: 70,
        borderRadius: 35
    },
    text: {
        color: '#E0E0E0', 
        fontSize: 16, 
        maxWidth: '100%',
        maxHeight: '20%'
    },
    plusContainer: {
        width: 24, 
        height: 24, 
        borderRadius: 10,
        backgroundColor: 'dodgerblue', 
        alignSelf: 'flex-end', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'absolute', 
        top: 48, 
        left: 45
    }, 
    plus: {
        fontSize: 23, 
        color: '#E0E0E0', 
        alignSelf: 'center', 
        marginTop: -3.5, 
        marginRight: -1
    }, 
    noplusContainer: {
        width: 24, 
        height: 24, 
        borderRadius: 10,
        backgroundColor: 'transparent', 
        alignSelf: 'flex-end', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'absolute', 
        top: 48, 
        left: 45
    }, 
    noplus: {
        fontSize: 23, 
        color: 'transparent', 
        alignSelf: 'center', 
        marginTop: -3.5, 
    }, 
    coverUnFillContainer: {
        borderColor: 'grey', 
        borderWidth: 2.5,
    },
})

export default Stories;